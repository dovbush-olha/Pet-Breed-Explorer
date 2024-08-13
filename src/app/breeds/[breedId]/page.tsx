import { getBreed } from '@/api/breed';
import { API_KEY_TYPES } from '@/api/constants';
import { formatBackendString } from '@/lib/utils/stringUtils';
import { omitProperties } from '@/lib/utils/objectUtils';

type BreedProps = {
  params: { breedId: string };
  searchParams: { api: API_KEY_TYPES };
};

export default async function Breed({ params, searchParams }: BreedProps) {
  const breedDetails = await getBreed(params.breedId, searchParams.api);
  const excludedBreedDetails = omitProperties(breedDetails, ['name', 'reference_image_id']);

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight">{breedDetails.name}</h1>
      <div className="grid grid-cols-2 gap-4 text-muted-foreground">
        {Object.entries(excludedBreedDetails).map(([key, value]) => (
          <div key={key}>
            <h3 className="font-semibold capitalize">{formatBackendString(key)}</h3>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </>
  );
}
