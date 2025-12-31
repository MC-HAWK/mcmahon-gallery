import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const CurrentWorkDrawings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: Image[] = [ 
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54763216103_2b4f3ea3ef_b.jpg',
      title: 'Erin\'s Turn',
      description: 'Watercolor on Paper \n 6" x 9"'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54762978091_9eda671c05_b.jpg',
      title: 'Hanging Masks',
      description: 'Watercolor on Paper \n 6" x 9"'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54762978086_b776acf372_b.jpg',
      title: 'Snapper',
      description: 'Watercolor on Paper \n 12" x 9"'
    }
  ];

  const handleImageClick = (image: Image) => {
    const index = images.findIndex(img => img.id === image.id);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(images[index]);
  };

  return (
    <div className="w-screen min-h-[calc(100vh-80px)] px-4 py-8">
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">Recent Work - Drawings</h1>
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
      <ImageModal 
        image={selectedImage} 
        images={images}
        currentIndex={currentImageIndex}
        onClose={handleModalClose} 
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default CurrentWorkDrawings;
