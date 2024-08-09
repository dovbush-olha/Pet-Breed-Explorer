export async function fetchJson<T>(url: string, requestOptions: RequestInit): Promise<T> {
  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
}
