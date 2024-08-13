export type Breed = {
  id: number | string;
  name: string;
  image: string;
};

export type BreedDetails = {
  name: string;
  weight: string;
  height: string;
  life_span: string;
  bred_for: string;
  breed_group: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
};

export enum APIS {
  CATS = 'CATS',
  DOGS = 'DOGS',
}
