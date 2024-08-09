export const API_BASE_URL = {
  CATS: 'https://api.thecatapi.com',
  DOGS: 'https://api.thedogapi.com',
};

export const requestOptions: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.API_KEY || '',
  },
};
