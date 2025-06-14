import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">About Ken McMahon</h1>
        <p className="text-lg mb-4">
          Ken McMahon is an accomplished artist whose work explores the intersection of traditional
          techniques and contemporary expression. With a career spanning several decades, Ken has
          developed a distinctive style that captures the essence of his subjects while pushing the
          boundaries of artistic convention.
        </p>
        <p className="text-lg mb-4">
          His work has been exhibited in numerous galleries and museums, earning recognition for its
          unique perspective and technical mastery. Ken's artistic journey reflects his deep
          connection to his subjects and his commitment to exploring new ways of seeing and
          representing the world around us.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Artist Statement</h2>
          <p className="text-lg italic">
            "My work is an exploration of the relationship between light, form, and emotion. Through
            my art, I seek to capture moments of beauty and meaning, inviting viewers to engage with
            the world in new and unexpected ways."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;