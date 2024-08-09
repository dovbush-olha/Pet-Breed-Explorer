'use server';

import { requestOptions } from '@/api/constants';

export async function getCats() {
  const res = await fetch('https://api.thecatapi.com/v1/breeds?limit=10', requestOptions);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
