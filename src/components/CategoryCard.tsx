
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types/guide';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link to={`/category/${category.slug}`} className="block h-full">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
          <p className="text-gray-600 mb-4">{category.description}</p>
          
          {category.subcategories.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Subcategories:</h4>
              <ul className="space-y-1">
                {category.subcategories.slice(0, 2).map((subcategory) => (
                  <li key={subcategory.id}>
                    <Link 
                      to={`/category/${category.slug}/${subcategory.slug}`}
                      className="text-sm text-guides-blue hover:underline flex items-center"
                    >
                      <ChevronRight className="h-3 w-3 mr-1" />
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
                {category.subcategories.length > 2 && (
                  <li className="text-sm text-gray-500">
                    +{category.subcategories.length - 2} more
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="bg-guides-gray p-4 border-t border-gray-200">
          <span className="inline-flex items-center text-sm font-medium text-guides-blue">
            Browse category
            <ChevronRight className="h-4 w-4 ml-1" />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
