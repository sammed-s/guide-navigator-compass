
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import { GuideResult } from '@/types/guide';
import { formatDate } from '@/lib/utils';

interface SearchResultItemProps {
  result: GuideResult;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ result }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-5 mb-4">
      <div className="mb-2 flex items-center text-sm text-gray-500">
        <Link to={`/category/${result.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-guides-blue">
          {result.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link 
          to={`/category/${result.category.toLowerCase().replace(/\s+/g, '-')}/${result.subcategory.toLowerCase().replace(/\s+/g, '-')}`} 
          className="hover:text-guides-blue"
        >
          {result.subcategory}
        </Link>
      </div>
      
      <Link to={`/guide/${result.slug}`}>
        <h3 className="text-lg font-semibold text-gray-900 hover:text-guides-blue mb-2">{result.title}</h3>
      </Link>
      
      <p className="text-gray-600 mb-3">{result.description}</p>
      
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="h-4 w-4 mr-1" />
        <span>{formatDate(result.date)}</span>
      </div>
    </div>
  );
};

export default SearchResultItem;
