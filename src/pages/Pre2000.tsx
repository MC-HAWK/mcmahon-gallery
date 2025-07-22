import React, { useState } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const PRE2000 = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Example images for Pre 2000 gallery
  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54605147826_37280e7e3d_b.jpg',
      title: 'Old City',
      description: 'A cityscape from the 1990s.'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54605356478_0a37fb32b5_b.jpg',
      title: 'Classic Car',
      description: 'A vintage car from the 1980s.'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54605147831_df11a67227_b.jpg',
      title: 'Historic Bridge',
      description: 'A bridge built before 2000.'
    }
  ];

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="w-screen min-h-[calc(100vh-80px)] px-4 py-8">
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">PRE 2000</h1>
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <div className="max-w-4xl max-h-[90vh] relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.title || ''}
              className="max-w-full max-h-[90vh] object-contain"
            />
            {(selectedImage.title || selectedImage.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                {selectedImage.title && (
                  <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                )}
                {selectedImage.description && (
                  <p>{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PRE2000; 