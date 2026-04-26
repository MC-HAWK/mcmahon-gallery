import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    'https://live.staticflickr.com/65535/54762978131_5a2083c2e6_b.jpg',
    'https://live.staticflickr.com/65535/54762978166_6d0f7e2871_b.jpg',
    'https://live.staticflickr.com/65535/54762978186_4f718ace36_b.jpg',
    'https://live.staticflickr.com/65535/54763207904_fc1ecc64fb_b.jpg',
    'https://live.staticflickr.com/65535/54763207944_f61c8692e6_b.jpg',
    'https://live.staticflickr.com/65535/54763216173_ea2b2657b3_b.jpg',
    'https://live.staticflickr.com/65535/54763216178_2a505ff153_b.jpg',
    'https://live.staticflickr.com/65535/54763216243_eeb2ef09b9_b.jpg',
    'https://live.staticflickr.com/65535/54763216103_2b4f3ea3ef_b.jpg',
    'https://live.staticflickr.com/65535/54762978091_9eda671c05_b.jpg',
    'https://live.staticflickr.com/65535/54762978086_b776acf372_b.jpg',
    'https://live.staticflickr.com/65535/55228459793_f1b582a837_b.jpg',
    'https://live.staticflickr.com/65535/55222839260_704e75ff7a_b.jpg',
    'https://live.staticflickr.com/65535/55221669795_86c65540f8_b.jpg',
    'https://live.staticflickr.com/65535/55221425878_4957bc6654_b.jpg',
    'https://live.staticflickr.com/65535/55221425898_282a99b1e4_b.jpg',
    'https://live.staticflickr.com/65535/54762978071_8a584e36d7_b.jpg',
    'https://live.staticflickr.com/65535/54762978061_8b1a3aef50_b.jpg',
    'https://live.staticflickr.com/65535/54762131102_54b65aceb0_b.jpg',
    'https://live.staticflickr.com/65535/54763216288_128b27dcfb_b.jpg',
    'https://live.staticflickr.com/65535/54763319930_0474045fbd_b.jpg',
    'https://live.staticflickr.com/65535/55006217642_ed23b8467a_b.jpg',
    'https://live.staticflickr.com/65535/55007361709_01fdd948ca_b.jpg',
    'https://live.staticflickr.com/65535/54988898437_e833b65e93_b.jpg',
    'https://live.staticflickr.com/65535/55220365467_6a30a46378_b.jpg',
  ];

  // Auto-advance carousel every 8 seconds (only when not paused)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  // Resume timer after 8 seconds of inactivity
  useEffect(() => {
    if (!isPaused) return;

    const resumeTimer = setTimeout(() => {
      setIsPaused(false);
    }, 8000);

    return () => clearTimeout(resumeTimer);
  }, [isPaused, currentImageIndex]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsPaused(true);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsPaused(true);
  };

  return (
    <div className="w-full h-screen bg-white" style={{ marginTop: '-80px', paddingTop: '80px' }}>
      {/* Main Image Container */}
      <div className="relative w-full h-full flex items-center justify-center" style={{ padding: '20px' }}>
        {images.map((image, index) => (
          <div
            key={`carousel-image-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'white'
            }}
          />
        ))}

        {/* Clickable Navigation Areas - Overlay on top */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-0 w-16 h-full cursor-pointer z-30 group md:w-1/3 pointer-events-auto bg-white bg-opacity-0" // Corrected
          aria-label="Previous image"
        >
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-all duration-300 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-0 w-16 h-full cursor-pointer z-30 group md:w-1/3 pointer-events-auto bg-white bg-opacity-0" // Corrected
          aria-label="Next image"
        >
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-all duration-300 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

                 {/* Minimal Progress Indicator */}
         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
          {images.map((_, index) => (
            <div
              key={`progress-${index}`}
              className={`h-1 transition-all duration-300 ${index === currentImageIndex
                  ? 'w-8 bg-gray-800'
                  : 'w-2 bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 