import React, { useState, useEffect } from 'react';
import ImageModal from '../components/ImageModal';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Pre2000Drawings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);


  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54834126091_e7945c50b0_b.jpg',
      title: 'Untitled 1980',
      description: 'collage and pastel \n 12x8'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54834126511_1f77b2d910_b.jpg',
      title: 'En Cline 1980',
      description: 'collage and pastel \n 4x9'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54834358684_03e01073d4_b.jpg',
      title: 'Drawing 1980',
      description: 'collage and pastel \n 12x9'
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/54834453565_66ff502931_b.jpg',
      title: 'Untitled 1980',
      description: 'collage and pencil \n 12x8'
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/54834453835_986a0f7356_b.jpg',
      title: 'For Manray 1980',
      description: ' collage and pastel \n 9x5'
    },
    {
      id: '6',
      url: 'https://live.staticflickr.com/65535/54834454220_0c5fe72545_b.jpg',
      title: 'Untitled 1981',
      description: 'Collage and Graphite'
    },
    {
      id: '7',
      url: 'https://live.staticflickr.com/65535/54834357494_d9d7d110c2_b.jpg',
      title: 'Tangram 1982',
      description: 'Collage and Pastel'
    },    
    {
      id: '8',
      url: 'https://live.staticflickr.com/65535/54834357884_b6db44c21b_b.jpg',
      title: 'Grid-el',
      description: 'pastel on paper \n 22x30'
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">PRE 2000 - DRAWINGS</h1>
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

export default Pre2000Drawings;
