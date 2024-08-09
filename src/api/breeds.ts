import { API_BASE_URL, requestOptions } from '@/api/constants';
import { Breed } from '@/api/types';
import { fetchJson } from '@/lib/utils';
import templateImage from '@/assets/images/cat-dog.jpg';

export const breedsEndpoint = '/v1/breeds?limit=10';

async function fetchImage(imageId: string): Promise<string> {
  const data = await fetchJson<{ url: string }>(`${API_BASE_URL.CATS}/v1/images/${imageId}`, requestOptions);
  return data.url;
}

export async function fetchBreeds(url: string, isCatAPI: boolean = false): Promise<Breed[]> {
  const data = await fetchJson<any[]>(url, requestOptions);

  const breeds: Breed[] = await Promise.all(
    data.map(async (breed: any) => {
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
