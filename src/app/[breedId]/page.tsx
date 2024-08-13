import { getBreed } from '@/api/breed';
import { API_KEY_TYPES } from '@/api/constants';

type BreedProps = {
  params: { breedId: string };
  searchParams: { api: API_KEY_TYPES };
};

export default async function Breed({ params, searchParams }: BreedProps) {
  const breedDetails = await getBreed(params.breedId, searchParams.api);

  return (
    <div className="w-full">
      <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{breedDetails.name}</h1>
            <div className="grid grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold">Origin</h3>
                <p>{breedDetails.origin}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
