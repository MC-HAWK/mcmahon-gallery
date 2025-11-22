import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Pre2000UnstretchedPaintings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54757383343_718a8c229d_b.jpg',
      title: '11-20-78',
      description: 'Acrylic on Unstretched Canvas \n 43" x 78"'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54756308947_fb97ed16b7_b.jpg',
      title: '7-7-78',
      description: 'acrylic on unstretched canvas \n 50" x 71"'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54757382988_6371c30c8c_b.jpg',
      title: '12-12-77',
      description: 'acrylic on unstretched canvas \n 47" X 72"'
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/54757498845_2b3f577454_b.jpg',
      title: '2-10-78',
      description: 'acrylic on unstretched canvas \n 60" x 78"'
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/54757391639_4466c0a883_b.jpg',
      title: '11-2-77',
      description: 'acrylic on unstretched canvas \n 47" x 74"'
    },
    {
      id: '6',
      url: 'https://live.staticflickr.com/65535/54757162501_748d7ed030_b.jpg',
      title: '12-20-77',
      description: 'acrylic on unstretched canvas  \n 47" x 72"'
    },
    {
      id: '7',
      url: 'https://live.staticflickr.com/65535/54757382943_97ba527387_b.jpg',
      title: '10-3-78',
      description: 'acrylic on unstretched canvas \n 47" x 75"'
    },
    {
      id: '8',
      url: 'https://live.staticflickr.com/65535/54757391464_75cae3a92e_b.jpg',
      title: '5-20-79',
      description: 'acrylic on unstretched canvas \n 84" x 36" '
    },
    {
      id: '9',
      url: 'https://live.staticflickr.com/65535/54757498700_96548da1b6_b.jpg',
      title: '4-29-79',
      description: 'acrylic on unstretched canvas \n 84" x 36"'
    },
    {
      id: '10',
      url: 'https://live.staticflickr.com/65535/54756309042_e6758da8cf_b.jpg',
      title: '5-15-78',
      description: 'acrylic on unstretched canvas \n 60" x 75"'
    },
    {
      id: '11',
      url: 'https://live.staticflickr.com/65535/54756308897_c81dbcfa95_b.jpg',
      title: '8-11-78',
      description: 'acrylic on unstretched canvas \n 35" x 69"'
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">Work Pre 2000 - Unstretched Paintings</h1>
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

export default Pre2000UnstretchedPaintings;
