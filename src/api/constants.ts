export const API_BASE_URL = {
  CATS: 'https://api.thecatapi.com',
  DOGS: 'https://api.thedogapi.com',
};

export const API_KEYS = {
  CATS: 'CATS',
  DOGS: 'DOGS',
} as const;

export type API_KEY_TYPES = (typeof API_KEYS)[keyof typeof API_KEYS];

export const requestOptions: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.API_KEY || '',
  },
};
