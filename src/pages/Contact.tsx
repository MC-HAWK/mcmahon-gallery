import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center max-w-2xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p className="text-lg mb-4">
          For inquiries about artwork, exhibitions, or collaborations, please contact Ken McMahon at:
        </p>
        <div className="bg-gray-100 p-6 rounded-lg mb-6 inline-block">
          <a
            href="mailto:contact@kenmcmahon.com"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
          >
            contact@kenmcmahon.com
          </a>
        </div>
        <p className="text-lg mt-4 mb-2">Ken is available for:</p>
        <ul className="list-disc list-inside text-lg mb-4 text-left mx-auto inline-block">
          <li>Gallery exhibitions</li>
          <li>Private commissions</li>
          <li>Art consultations</li>
          <li>Speaking engagements</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact; 