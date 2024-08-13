import { Logo } from '@/components/ui/logo';
import { SearchIcon } from '@/components/ui/icons/search-icon';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center px-8 md:px-6">
        <Logo />
        <div className="relative max-w-md flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-primary" />
          </div>
          <Input
            type="search"
            placeholder="Search for a pet breed..."
            className="w-full rounded-md bg-background pl-10 text-primary focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
    </header>
  );
}
