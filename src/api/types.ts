import { StaticImageData } from 'next/image';

export type Breed = {
  id: number | string;
  name: string;
  image: string | StaticImageData;
};

export type BreedDetails = {
  id: string | number;
  name: string;
  weight: string;
  life_span: string;
  bred_for: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  breed_group: string;
};
