
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SearchResultItem from '@/components/SearchResultItem';
import { GuideResult } from '@/types/guide';
import { searchGuides } from '@/services/guideService';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q') || '';
  const [results, setResults] = useState<GuideResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      if (q.trim()) {
        try {
          const searchResults = await searchGuides(q);
          setResults(searchResults);
        } catch (error) {
          console.error('Error searching guides:', error);
        }
      } else {
        setResults([]);
      }
      setLoading(false);
    };

    fetchResults();
  }, [q]);

  const breadcrumbItems = [
    {
      label: 'Search',
      href: '/search'
    },
    {
      label: q,
      href: `/search?q=${encodeURIComponent(q)}`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <SearchBar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Search Results for &quot;{q}&quot;
          </h1>
          
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-5 mb-4 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-2/3 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result) => (
                <SearchResultItem key={result.id} result={result} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <SearchIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">
                We couldn&apos;t find any guides matching your search. Please try different keywords.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
