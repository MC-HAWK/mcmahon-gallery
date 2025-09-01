import React, { useState } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Pre2000Paintings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    // {
    //   id: '1',
    //   url: 'https://live.staticflickr.com/65535/54605147826_37280e7e3d_b.jpg',
    //   title: 'Traditional Landscape',
    //   description: 'Oil on canvas \n 30" x 40"'
    // },
    // {
    //   id: '2',
    //   url: 'https://live.staticflickr.com/65535/54605356478_0a37fb32b5_b.jpg',
    //   title: 'Classical Still Life',
    //   description: 'Oil on canvas \n 24" x 36"'
    // },
    // {
    //   id: '3',
    //   url: 'https://live.staticflickr.com/65535/54605147831_df11a67227_b.jpg',
    //   title: 'Academic Portrait',
    //   description: 'Oil on canvas \n 20" x 24"'
    // },
    // {
    //   id: '4',
    //   url: 'https://live.staticflickr.com/65535/54605340734_03b826ed7b_b.jpg',
    //   title: 'Historical Scene',
    //   description: 'Oil on canvas \n 36" x 48"'
    // },
    // {
    //   id: '5',
    //   url: 'https://live.staticflickr.com/65535/54605147841_6f03a24daf_b.jpg',
    //   title: 'Figurative Study',
    //   description: 'Oil on canvas \n 28" x 44"'
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

  return (
    <div className="w-screen min-h-[calc(100vh-80px)] px-4 py-8">
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">PRE 2000 - PAINTINGS</h1>
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleModalClose}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title || ''}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            {(selectedImage.title || selectedImage.description) && (
              <div className="bg-black bg-opacity-75 text-white p-4 mt-2 rounded">
                {selectedImage.title && (
                  <h3 className="text-lg font-semibold mb-2">{selectedImage.title}</h3>
                )}
                {selectedImage.description && (
                  <p className="text-sm whitespace-pre-line">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pre2000Paintings;
