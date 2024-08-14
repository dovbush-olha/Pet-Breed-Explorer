import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="flex h-[350px] w-[435px] flex-col items-center gap-6 rounded-xl bg-background p-6">
      <Skeleton className="h-64 h-[250px] w-full rounded-md" />
      <p className="mx-auto h-7 px-2 align-middle font-loading">Lorem Ipsum is simply dummy text</p>
    </div>
  );
}
