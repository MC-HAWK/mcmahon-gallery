import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Pre2000Photographs = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/55070190667_921e0e6107_b.jpg',
      title: 'Gallery 1984',
      description: ''
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/55070196702_c494fc29e7_b.jpg',
      title: 'Gridology',
      description: ''
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/55071091001_768bfd6850_b.jpg',
      title: 'Grid School II 1984',
      description: ''
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/55071092056_a2bc50b8bc_b.jpg',
      title: 'Grid School 1984',
      description: ''
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/55071092321_dcd92e9deb_b.jpg',
      title: 'Lineup 2008',
      description: ''
    },
    {
      id: '6',
      url: 'https://live.staticflickr.com/65535/55071094921_2665dcfb91_b.jpg',
      title: 'Untitled 2006',
      description: ''
    },
    {
      id: '7',
      url: 'https://live.staticflickr.com/65535/55071278838_2eefe08ac6_b.jpg',
      title: 'Formation 1984',
      description: ''
    },
    {
      id: '8',
      url: 'https://live.staticflickr.com/65535/55071344629_bd2bdbe526_b.jpg',
      title: 'Double Cross 2008',
      description: ''
    },
    {
      id: '9',
      url: 'https://live.staticflickr.com/65535/55071454215_a95bfb5ba8_b.jpg',
      title: 'Double Cross II-2008',
      description: ''
    },
    {
      id: '10',
      url: 'https://live.staticflickr.com/65535/55071456155_58e76af240_b.jpg',
      title: 'Lineup 2008',
      description: ''
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">Photographic Work</h1>
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

export default Pre2000Photographs;
