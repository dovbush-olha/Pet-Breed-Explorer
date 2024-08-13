import { fetchJson } from '@/lib/utils/fetchUtils';
import { API_BASE_URL, API_KEY_TYPES, API_KEYS, requestOptions } from '@/api/constants';

export async function fetchImage(imageId: string, apiKey: API_KEY_TYPES = API_KEYS.CATS): Promise<string> {
  const data = await fetchJson<{ url: string }>(`${API_BASE_URL[apiKey]}/v1/images/${imageId}`, requestOptions);
  return data.url;
}
