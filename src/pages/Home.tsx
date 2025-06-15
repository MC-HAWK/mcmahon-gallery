import React from 'react';

const Home = () => {
  return (
    <div 
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80)`,
      }}
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg z-10">Capturing Moments of Beauty</h1>
    </div>
  );
};

export default Home; 