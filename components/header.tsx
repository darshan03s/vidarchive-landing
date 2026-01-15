import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-10 bg-transparent z-10 relative">
      <a
        href={process.env.NEXT_PUBLIC_GITHUB_URL!}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 z-10"
      >
        <Button className="bg-white hover:bg-white/80 text-black" size="icon-sm">
          <Github />
        </Button>
      </a>
    </header>
  );
};
export default Header;
