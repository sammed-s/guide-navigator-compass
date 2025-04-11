
export interface GuideResult {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
  subcategory: string;
}

export interface GuideDetail extends GuideResult {
  content: string;
  relatedArticles: GuideResult[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}
