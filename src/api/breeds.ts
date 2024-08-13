import { API_BASE_URL, requestOptions } from '@/api/constants';
import { Breed } from '@/api/types';
import { fetchJson } from '@/lib/utils/fetchUtils';
import templateImage from '@/assets/images/cat-dog.jpg';
import { fetchImage } from '@/api/images';

type BreedApiResponse = {
  id: string;
  name: string;
  reference_image_id?: string;
  image?: {
    url: string;
  };
};
export const breedsEndpoint = '/v1/breeds?limit=10';

export async function fetchBreeds(url: string, isCatAPI: boolean = false): Promise<Breed[]> {
  const data = await fetchJson<BreedApiResponse[]>(url, requestOptions);

  const breeds: Breed[] = await Promise.all(
    data.map(async (breed) => {
      let imageUrl = breed.image?.url;

      if (isCatAPI && breed.reference_image_id) {
        imageUrl = await fetchImage(breed.reference_image_id);
      }

      return {
        id: breed.id,
        name: breed.name,
        image: imageUrl ?? templateImage,
      };
    }),
  );

  return breeds;
}

export async function getBreeds(): Promise<Breed[]> {
  const [dogs, cats] = await Promise.all([
    fetchBreeds(`${API_BASE_URL.DOGS}${breedsEndpoint}`),
    fetchBreeds(`${API_BASE_URL.CATS}${breedsEndpoint}`, true),
  ]);

  return [...dogs, ...cats];
}
