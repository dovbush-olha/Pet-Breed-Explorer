import { fetchJson } from '@/lib/utils/fetchUtils';
import { BreedDetails } from '@/api/types';
import { API_BASE_URL, API_KEY_TYPES, requestOptions } from '@/api/constants';

type BreedDetailsResponse = {
  name: string;
  origin: string;
  temperament: string;
  life_span: string;
  bred_for: string;
  reference_image_id: string;
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
};

export async function getBreed(breedId: string, api: API_KEY_TYPES): Promise<BreedDetails> {
  const data = await fetchJson<BreedDetailsResponse>(`${API_BASE_URL[api]}/v1/breeds/${breedId}`, requestOptions);

  const result: BreedDetails = {
    name: data.name,
    origin: data.origin,
    temperament: data.temperament,
    life_span: data.life_span,
    bred_for: data.bred_for,
    reference_image_id: data.reference_image_id,
    weight: data.weight.metric,
    height: data.height.metric,
  };

  return result;
}
