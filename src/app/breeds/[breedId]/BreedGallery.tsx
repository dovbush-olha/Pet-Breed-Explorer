import Image from 'next/image';

import { fetchImage } from '@/api/images';
import { getApi } from '@/api/constants';

type BreedGalleryProps = {
  breedId: string | number;
  imageId: string;
  name: string;
};

export async function BreedGallery({ breedId, imageId, name }: BreedGalleryProps) {
  const apiKey = getApi(breedId);
  const image = await fetchImage(imageId, apiKey);

  return (
    <section className="w-full bg-muted py-6">
      <div className="grid grid-cols-1">
        <Image
          src={image}
          alt={name}
          width={500}
          height={550}
          className="h-[550px] w-full rounded-md object-cover object-center"
        />
      </div>
    </section>
  );
}
