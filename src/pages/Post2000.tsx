import React, { useState } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Post2000 = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Stock images from Unsplash
  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54605147826_37280e7e3d_b.jpg'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54605356478_0a37fb32b5_b.jpg'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54605147831_df11a67227_b.jpg'
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/54605340734_03b826ed7b_b.jpg'
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/54605147841_6f03a24daf_b.jpg'
    }
    // how to have a title and description for each image
    // {
    //   id: '6',
    //   url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    //   title: 'Snowy Mountains',
    //   description: 'Snow covered mountains.'
    // },
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">POST 2000</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 shadow hover:shadow-xl transition-shadow duration-300 w-full bg-gray-100 flex items-center justify-center"
            onClick={() => handleImageClick(image)}
          >
            <div className="w-72 h-72 flex items-center justify-center bg-gray-100">
              <img
                src={image.url}
                alt={image.title || ''}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4">
              {image.title && (
                <h3 className="text-xl font-semibold">{image.title}</h3>
              )}
            </div>
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

export default Post2000; 