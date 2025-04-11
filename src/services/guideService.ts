
import { GuideDetail, GuideResult, Category } from '@/types/guide';

// Mock data for categories
const categories: Category[] = [
  {
    id: '1',
    name: 'Getting Started',
    description: 'Essential guides for beginners',
    slug: 'getting-started',
    subcategories: [
      { id: '101', name: 'Installation', description: 'Setting up your environment', slug: 'installation' },
      { id: '102', name: 'Configuration', description: 'Basic configuration options', slug: 'configuration' }
    ]
  },
  {
    id: '2',
    name: 'Core Concepts',
    description: 'Fundamental principles and architecture',
    slug: 'core-concepts',
    subcategories: [
      { id: '201', name: 'Architecture', description: 'Understanding the system architecture', slug: 'architecture' },
      { id: '202', name: 'Components', description: 'Building blocks of the framework', slug: 'components' }
    ]
  },
  {
    id: '3',
    name: 'Advanced Usage',
    description: 'Taking your skills to the next level',
    slug: 'advanced-usage',
    subcategories: [
      { id: '301', name: 'Performance', description: 'Optimization techniques', slug: 'performance' },
      { id: '302', name: 'Security', description: 'Securing your application', slug: 'security' }
    ]
  },
  {
    id: '4',
    name: 'API Reference',
    description: 'Comprehensive API documentation',
    slug: 'api-reference',
    subcategories: [
      { id: '401', name: 'Endpoints', description: 'Available API endpoints', slug: 'endpoints' },
      { id: '402', name: 'Authentication', description: 'API authentication methods', slug: 'authentication' }
    ]
  },
  {
    id: '5',
    name: 'Troubleshooting',
    description: 'Solutions for common issues',
    slug: 'troubleshooting',
    subcategories: [
      { id: '501', name: 'Common Errors', description: 'Frequently encountered errors', slug: 'common-errors' },
      { id: '502', name: 'Debugging', description: 'Debug techniques and tools', slug: 'debugging' }
    ]
  },
  {
    id: '6',
    name: 'Best Practices',
    description: 'Recommended patterns and approaches',
    slug: 'best-practices',
    subcategories: [
      { id: '601', name: 'Code Organization', description: 'Structuring your codebase', slug: 'code-organization' },
      { id: '602', name: 'Testing', description: 'Testing methodologies', slug: 'testing' }
    ]
  },
  {
    id: '7',
    name: 'Tutorials',
    description: 'Step-by-step guides for specific tasks',
    slug: 'tutorials',
    subcategories: [
      { id: '701', name: 'Beginners', description: 'Introductory tutorials', slug: 'beginners' },
      { id: '702', name: 'Advanced', description: 'Advanced implementation examples', slug: 'advanced' }
    ]
  },
  {
    id: '8',
    name: 'Integrations',
    description: 'Working with third-party services',
    slug: 'integrations',
    subcategories: [
      { id: '801', name: 'Cloud Services', description: 'Integrating with cloud providers', slug: 'cloud-services' },
      { id: '802', name: 'Databases', description: 'Database connectivity options', slug: 'databases' }
    ]
  }
];

// Mock data for guides
const guides: GuideResult[] = [
  {
    id: '1',
    title: 'Getting Started with Our Platform',
    description: 'Learn how to set up your environment and make your first API call.',
    slug: 'getting-started-with-our-platform',
    date: '2025-01-15',
    category: 'Getting Started',
    subcategory: 'Installation'
  },
  {
    id: '2',
    title: 'Understanding Core Architecture',
    description: 'Deep dive into the architectural principles that power our platform.',
    slug: 'understanding-core-architecture',
    date: '2025-02-20',
    category: 'Core Concepts',
    subcategory: 'Architecture'
  },
  {
    id: '3',
    title: 'Advanced Performance Optimization',
    description: 'Techniques to optimize your application for maximum performance.',
    slug: 'advanced-performance-optimization',
    date: '2025-03-10',
    category: 'Advanced Usage',
    subcategory: 'Performance'
  },
  {
    id: '4',
    title: 'API Authentication Methods',
    description: 'Learn about the different ways to authenticate with our API.',
    slug: 'api-authentication-methods',
    date: '2025-03-25',
    category: 'API Reference',
    subcategory: 'Authentication'
  },
  {
    id: '5',
    title: 'Troubleshooting Common Errors',
    description: 'Solutions for the most frequently encountered issues.',
    slug: 'troubleshooting-common-errors',
    date: '2025-04-05',
    category: 'Troubleshooting',
    subcategory: 'Common Errors'
  },
  {
    id: '6',
    title: 'Best Practices for Code Organization',
    description: 'Learn how to structure your codebase for maintainability and scalability.',
    slug: 'best-practices-for-code-organization',
    date: '2024-11-15',
    category: 'Best Practices',
    subcategory: 'Code Organization'
  },
  {
    id: '7',
    title: 'Beginner Tutorial: Building Your First App',
    description: 'Step-by-step guide to build a simple application with our platform.',
    slug: 'beginner-tutorial-building-your-first-app',
    date: '2024-12-20',
    category: 'Tutorials',
    subcategory: 'Beginners'
  },
  {
    id: '8',
    title: 'Integrating with Cloud Services',
    description: 'How to connect your application with popular cloud providers.',
    slug: 'integrating-with-cloud-services',
    date: '2025-01-05',
    category: 'Integrations',
    subcategory: 'Cloud Services'
  },
  {
    id: '9',
    title: 'Configuration Options Explained',
    description: 'Comprehensive overview of all configuration parameters.',
    slug: 'configuration-options-explained',
    date: '2025-01-30',
    category: 'Getting Started',
    subcategory: 'Configuration'
  },
  {
    id: '10',
    title: 'Component Architecture and Lifecycle',
    description: 'Understanding how components work together and their lifecycle events.',
    slug: 'component-architecture-and-lifecycle',
    date: '2025-02-15',
    category: 'Core Concepts',
    subcategory: 'Components'
  }
];

// This function simulates an API call with a delay
const simulateApiCall = <T>(data: T, delay = 500): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

// Get all categories
export const getCategories = async (): Promise<Category[]> => {
  return simulateApiCall(categories);
};

// Search guides based on a query
export const searchGuides = async (query: string): Promise<GuideResult[]> => {
  // Filter guides based on the search query
  const filteredGuides = guides.filter((guide) => {
    const searchableText = `${guide.title} ${guide.description} ${guide.category} ${guide.subcategory}`.toLowerCase();
    return searchableText.includes(query.toLowerCase());
  });
  
  return simulateApiCall(filteredGuides);
};

// Get guide details by slug
export const getGuideBySlug = async (slug: string): Promise<GuideDetail | null> => {
  const guide = guides.find((g) => g.slug === slug);
  
  if (!guide) return simulateApiCall(null);
  
  // Generate some mock content and related articles
  const guideDetail: GuideDetail = {
    ...guide,
    content: `
      <h1>${guide.title}</h1>
      <p class="lead">${guide.description}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
      <h2>Getting Started</h2>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <pre><code>// Example code
const example = () => {
  console.log("Hello, world!");
};
      </code></pre>
      <h2>Advanced Usage</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul>
        <li>First item in the list</li>
        <li>Second item in the list</li>
        <li>Third item in the list</li>
      </ul>
      <h2>Conclusion</h2>
      <p>In conclusion, this guide provides a comprehensive overview of ${guide.title}. We hope you found it useful and can apply these concepts in your own projects.</p>
    `,
    relatedArticles: guides
      .filter((g) => g.id !== guide.id && (g.category === guide.category || g.subcategory === guide.subcategory))
      .slice(0, 3)
  };
  
  return simulateApiCall(guideDetail);
};

// Get guides by category and subcategory
export const getGuidesByCategory = async (category: string, subcategory?: string): Promise<GuideResult[]> => {
  const filteredGuides = guides.filter((guide) => {
    if (subcategory) {
      return guide.category.toLowerCase() === category.toLowerCase() && 
             guide.subcategory.toLowerCase() === subcategory.toLowerCase();
    }
    return guide.category.toLowerCase() === category.toLowerCase();
  });
  
  return simulateApiCall(filteredGuides);
};
