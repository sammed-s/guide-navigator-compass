
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import GuideContent from '@/components/GuideContent';
import { GuideDetail } from '@/types/guide';
import { getGuideBySlug } from '@/services/guideService';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const GuideDetailPage = () => {
  const { slug } = useParams();
  const [guide, setGuide] = useState<GuideDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGuide = async () => {
      setLoading(true);
      if (slug) {
        try {
          const guideData = await getGuideBySlug(slug);
          if (guideData) {
            setGuide(guideData);
          } else {
            toast({
              title: "Guide not found",
              description: "The requested guide could not be found.",
              variant: "destructive"
            });
            navigate('/');
          }
        } catch (error) {
          console.error('Error fetching guide:', error);
          toast({
            title: "Error",
            description: "There was an error loading the guide.",
            variant: "destructive"
          });
        }
      }
      setLoading(false);
    };

    fetchGuide();
  }, [slug, navigate, toast]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {loading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
            </div>
          </div>
        ) : guide ? (
          <GuideContent guide={guide} />
        ) : null}
      </main>
    </div>
  );
};

export default GuideDetailPage;
