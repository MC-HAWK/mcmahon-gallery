import React, { useState } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Miscellaneous = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Example images for Post 2000 gallery
  const images: Image[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      title: 'Modern Skyline',
      description: 'A city skyline after 2000.'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Contemporary Art',
      description: 'Art installation from the 2010s.'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      title: 'New Bridge',
      description: 'A bridge built after 2000.'
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">MISCELLANEOUS</h1>
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
                  <p className="text-sm">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Miscellaneous; 