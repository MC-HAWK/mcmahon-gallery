import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full pt-20 flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      <footer className="w-full py-4 text-center text-sm text-gray-500 border-t border-gray-100 mt-8">
        <p>Copyright © 2025 Ken McMahon Studio - All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout; 