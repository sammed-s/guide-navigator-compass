
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SearchResultItem from '@/components/SearchResultItem';
import { Category, GuideResult } from '@/types/guide';
import { getCategories, getGuidesByCategory } from '@/services/guideService';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  const [guides, setGuides] = useState<GuideResult[]>([]);
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (category) {
        try {
          // Fetch category details
          const categories = await getCategories();
          const matchedCategory = categories.find(
            (c) => c.slug === category
          );
          
          if (matchedCategory) {
            setCategoryData(matchedCategory);
            
            // Fetch guides for this category
            const categoryGuides = await getGuidesByCategory(matchedCategory.name);
            setGuides(categoryGuides);
          } else {
            // Handle category not found
            navigate('/');
          }
        } catch (error) {
          console.error('Error fetching category data:', error);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [category, navigate]);

  const breadcrumbItems = categoryData
    ? [
        {
          label: categoryData.name,
          href: `/category/${categoryData.slug}`
        }
      ]
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <SearchBar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            </div>
          ) : categoryData ? (
            <>
              <div className="mb-6">
                <Breadcrumbs items={breadcrumbItems} />
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">{categoryData.name}</h1>
                <p className="text-gray-600 mb-6">{categoryData.description}</p>
                
                {categoryData.subcategories.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Subcategories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categoryData.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.id}
                          to={`/category/${categoryData.slug}/${subcategory.slug}`}
                          className="bg-guides-gray rounded-md p-4 hover:bg-guides-blue/10 transition-colors"
                        >
                          <h3 className="font-medium text-gray-900">{subcategory.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{subcategory.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Guides in {categoryData.name}
              </h2>
              
              {guides.length > 0 ? (
                <div className="space-y-4">
                  {guides.map((guide) => (
                    <SearchResultItem key={guide.id} result={guide} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <p className="text-gray-600">No guides found in this category.</p>
                </div>
              )}
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
