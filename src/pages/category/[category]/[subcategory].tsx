
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SearchResultItem from '@/components/SearchResultItem';
import { Category, GuideResult, Subcategory } from '@/types/guide';
import { getCategories, getGuidesByCategory } from '@/services/guideService';

const SubcategoryPage = () => {
  const router = useRouter();
  const { category, subcategory } = router.query;
  const [guides, setGuides] = useState<GuideResult[]>([]);
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [subcategoryData, setSubcategoryData] = useState<Subcategory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (typeof category === 'string' && typeof subcategory === 'string') {
        try {
          // Fetch category and subcategory details
          const categories = await getCategories();
          const matchedCategory = categories.find(
            (c) => c.slug === category
          );
          
          if (matchedCategory) {
            setCategoryData(matchedCategory);
            
            const matchedSubcategory = matchedCategory.subcategories.find(
              (s) => s.slug === subcategory
            );
            
            if (matchedSubcategory) {
              setSubcategoryData(matchedSubcategory);
              
              // Fetch guides for this subcategory
              const subcategoryGuides = await getGuidesByCategory(matchedCategory.name, matchedSubcategory.name);
              setGuides(subcategoryGuides);
            } else {
              // Handle subcategory not found
              router.push(`/category/${category}`);
            }
          } else {
            // Handle category not found
            router.push('/');
          }
        } catch (error) {
          console.error('Error fetching subcategory data:', error);
        }
      }
      setLoading(false);
    };

    if (router.isReady) {
      fetchData();
    }
  }, [category, subcategory, router.isReady, router]);

  const breadcrumbItems = categoryData && subcategoryData
    ? [
        {
          label: categoryData.name,
          href: `/category/${categoryData.slug}`
        },
        {
          label: subcategoryData.name,
          href: `/category/${categoryData.slug}/${subcategoryData.slug}`
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
          ) : categoryData && subcategoryData ? (
            <>
              <div className="mb-6">
                <Breadcrumbs items={breadcrumbItems} />
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{subcategoryData.name}</h1>
                <p className="text-gray-500 mb-3">
                  Category: <span className="text-guides-blue">{categoryData.name}</span>
                </p>
                <p className="text-gray-600">{subcategoryData.description}</p>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Guides in {subcategoryData.name}
              </h2>
              
              {guides.length > 0 ? (
                <div className="space-y-4">
                  {guides.map((guide) => (
                    <SearchResultItem key={guide.id} result={guide} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <p className="text-gray-600">No guides found in this subcategory.</p>
                </div>
              )}
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default SubcategoryPage;
