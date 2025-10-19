import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center max-w-2xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p className="text-lg mb-4">
          For inquiries, please contact Ken McMahon at:
        </p>
        <div className="bg-gray-100 p-6 rounded-lg mb-6 inline-block">
          <a
            href="mailto:contact@kenmcmahon.com"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
          >
            kenmcmahonstudio@gmail.com
          </a>
        </div>        
      </div>
    </div>
  );
};

export default Contact; 