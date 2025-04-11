
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-gray-700 hover:text-guides-blue px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-guides-blue px-3 py-2 rounded-md text-sm font-medium">
              Categories
            </Link>
            <Link href="/recent" className="text-gray-700 hover:text-guides-blue px-3 py-2 rounded-md text-sm font-medium">
              Recent
            </Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 hover:text-guides-blue block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-guides-blue block px-3 py-2 rounded-md text-base font-medium">
              Categories
            </Link>
            <Link href="/recent" className="text-gray-700 hover:text-guides-blue block px-3 py-2 rounded-md text-base font-medium">
              Recent
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
