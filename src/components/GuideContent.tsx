
import React from 'react';
import { GuideDetail } from '@/types/guide';
import Breadcrumbs from './Breadcrumbs';
import { Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface GuideContentProps {
  guide: GuideDetail;
}

const GuideContent: React.FC<GuideContentProps> = ({ guide }) => {
  const breadcrumbItems = [
    {
      label: guide.category,
      href: `/category/${guide.category.toLowerCase().replace(/\s+/g, '-')}`
    },
    {
      label: guide.subcategory,
      href: `/category/${guide.category.toLowerCase().replace(/\s+/g, '-')}/${guide.subcategory.toLowerCase().replace(/\s+/g, '-')}`
    },
    {
      label: guide.title,
      href: `/guide/${guide.slug}`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 lg:pr-8">
          <article>
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{guide.title}</h1>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(guide.date)}</span>
              </div>
              <p className="text-lg text-gray-600">{guide.description}</p>
            </header>
            
            <div 
              className="prose prose-blue max-w-none" 
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </article>
        </div>
        
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <div className="bg-guides-gray rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Related Articles</h2>
            {guide.relatedArticles.length > 0 ? (
              <ul className="space-y-4">
                {guide.relatedArticles.map((article) => (
                  <li key={article.id} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                    <Link to={`/guide/${article.slug}`} className="hover:text-guides-blue font-medium">
                      {article.title}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{article.description.substring(0, 80)}...</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No related articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideContent;
