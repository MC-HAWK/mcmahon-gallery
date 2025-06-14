import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full pt-20">{children}</div>
  );
};

export default Layout; 