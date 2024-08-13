import { fetchJson } from '@/lib/utils';
import { BreedDetails } from '@/api/types';
import { API_BASE_URL, API_KEY_TYPES, requestOptions } from '@/api/constants';

type BreedDetailsResponse = {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  life_span: string;
  bred_for: string;
  breed_group: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  name: string;
};

export async function getBreed(breedId: string, api: API_KEY_TYPES): Promise<BreedDetails> {
  const data = await fetchJson<BreedDetailsResponse>(`${API_BASE_URL[api]}/v1/breeds/${breedId}`, requestOptions);

  const result: BreedDetails = {
    weight: data.weight.metric,
    height: data.height.metric,
    life_span: data.life_span,
    bred_for: data.bred_for,
    breed_group: data.breed_group,
    temperament: data.temperament,
    origin: data.origin,
    reference_image_id: data.reference_image_id,
    name: data.name,
  };

  return result;
}
