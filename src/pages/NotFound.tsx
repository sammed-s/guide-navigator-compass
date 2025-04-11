
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-guides-blue">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mt-4 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Button 
            onClick={() => router.push('/')} 
            className="bg-guides-blue hover:bg-guides-darkBlue"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
