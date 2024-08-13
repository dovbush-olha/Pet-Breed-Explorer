import { fetchJson } from '@/lib/utils';
import { APIS, BreedDetails } from '@/api/types';
import { API_BASE_URL, requestOptions } from '@/api/constants';

export async function getBreed(breedId: string, api: APIS): Promise<BreedDetails> {
  const data = await fetchJson<any>(`${API_BASE_URL[api]}/v1/breeds/${breedId}`, requestOptions);

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
