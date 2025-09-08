import React, { useState, useEffect } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Post2000Photographs = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isLaptopHeight, setIsLaptopHeight] = useState(false);

  useEffect(() => {
    const checkViewportHeight = () => {
      setIsLaptopHeight(window.innerHeight >= 600 && window.innerHeight <= 800);
    };
    
    checkViewportHeight();
    window.addEventListener('resize', checkViewportHeight);
    
    return () => window.removeEventListener('resize', checkViewportHeight);
  }, []);

  const images: Image[] = [
    // {
    //   id: '1',
    //   url: 'https://live.staticflickr.com/65535/54605147826_37280e7e3d_b.jpg',
    //   title: 'Urban Landscape',
    //   description: 'Digital photograph \n 24" x 36"'
    // },
    // {
    //   id: '2',
    //   url: 'https://live.staticflickr.com/65535/54605356478_0a37fb32b5_b.jpg',
    //   title: 'City Reflections',
    //   description: 'Digital photograph \n 30" x 40"'
    // },
    // {
    //   id: '3',
    //   url: 'https://live.staticflickr.com/65535/54605147831_df11a67227_b.jpg',
    //   title: 'Modern Architecture',
    //   description: 'Digital photograph \n 20" x 30"'
    // },
    // {
    //   id: '4',
    //   url: 'https://live.staticflickr.com/65535/54605340734_03b826ed7b_b.jpg',
    //   title: 'Street Scene',
    //   description: 'Digital photograph \n 18" x 24"'
    // },
    // {
    //   id: '5',
    //   url: 'https://live.staticflickr.com/65535/54605147841_6f03a24daf_b.jpg',
    //   title: 'Industrial Detail',
    //   description: 'Digital photograph \n 22" x 28"'
    // }
  ];

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const container = img.closest('.image-modal-container') as HTMLElement;
    if (container) {
      container.style.setProperty('--image-width', `${img.offsetWidth}px`);
    }
  };

  return (
    <div className="w-screen min-h-[calc(100vh-80px)] px-4 py-8">
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">POST 2000 - PHOTOGRAPHS</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.url}
              alt={image.title || ''}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={handleModalClose}
        >
          <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center image-modal-container">
            <div className="flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title || ''}
                className="max-w-full max-h-[75vh] object-contain"
                style={{
                  maxHeight: isLaptopHeight ? '85vh' : '75vh'
                }}
                onLoad={handleImageLoad}
              />
            </div>
            {(selectedImage.title || selectedImage.description) && (
              <div className="bg-black bg-opacity-75 text-white p-3 sm:p-4 mt-1 rounded" style={{ width: 'var(--image-width, auto)' }}>
                {selectedImage.title && (
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{selectedImage.title}</h3>
                )}
                {selectedImage.description && (
                  <p className="text-xs sm:text-sm whitespace-pre-line">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post2000Photographs;
