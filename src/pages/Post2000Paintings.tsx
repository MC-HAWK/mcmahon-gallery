import React, { useState, useEffect } from 'react';
import ImageModal from '../components/ImageModal';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Post2000Paintings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);


  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54833253047_c6bdafaf96_b.jpg',
      title: 'Annunciation'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54833253517_6ca49d8f9e_b.jpg',
      title: 'Hitch'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54833255567_dff88dcbb8_b.jpg',
      title: 'En-vy 2016'
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/54834110356_c9fffbc960_b.jpg',
      title: 'Step-in-two'
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/54834341619_ee6d1c3039_b.jpg',
      title: 'Stepping En'
    },
    {
      id: '6',
      url: 'https://live.staticflickr.com/65535/54834341999_f1a7529078_b.jpg',
      title: 'XingRedC'
    },
    {
      id: '7',
      url: 'https://live.staticflickr.com/65535/54834342214_d74a3c9ca6_b.jpg',
      title: 'Red  Cross'
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">POST 2000 - PAINTINGS</h1>
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

export default Post2000Paintings;
