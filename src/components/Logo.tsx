
import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-guides-blue"
      >
        <path 
          d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        <path 
          d="M12 16.5L12 8.5" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <path 
          d="M9 11.5L12 8.5L15 11.5" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-900">GuideNavigator</span>
    </Link>
  );
};

export default Logo;
