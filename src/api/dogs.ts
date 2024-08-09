'use server';

import { requestOptions } from '@/api/constants';

export async function getDogs() {
  const res = await fetch('https://api.thedogapi.com/v1/breeds?limit=10', requestOptions);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
