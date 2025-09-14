import React, { useState, useEffect } from 'react';
import ImageModal from '../components/ImageModal';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Post2000Photographs = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);


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

export default Post2000Photographs;
