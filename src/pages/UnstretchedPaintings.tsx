import React, { useState } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const UnstretchedPaintings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54748241267_62da25ee69_b.jpg',
      title: '11-20-78',
      description: 'Acrylic on Unstretched Canvas \n 43" x 78"'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54748240942_1b59f764a1_b.jpg',
      title: '7-7-78',
      description: 'acrylic on unstretched canvas \n 50" x 71"'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54748241032_0d8a8af0af_b.jpg',
      title: '9-10-78',
      description: 'acrylic on unstretched canvas \n 47" X 72"'
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/54749093846_f0ed68b2b0_b.jpg',
      title: '2-10-78',
      description: 'acrylic on unstretched canvas \n 60" x 78"'
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/54749094591_f90ceb31e9_b.jpg',
      title: '11-2-77',
      description: 'acrylic on unstretched canvas \n 47" x 74"'
    },
    {
      id: '6',
      url: 'https://live.staticflickr.com/65535/54749302273_6eb5f7f545_b.jpg',
      title: '12-20-77',
      description: 'acrylic on unstretched canvas  \n 47" x 72"'
    },
    {
      id: '7',
      url: 'https://live.staticflickr.com/65535/54749302498_6e76ec6700_b.jpg',
      title: '10-3-78',
      description: 'acrylic on unstretched canvas \n 47" x 75"'
    },
    {
      id: '8',
      url: 'https://live.staticflickr.com/65535/54749310799_854cca8422_b.jpg',
      title: '5-20-79',
      description: 'acrylic on unstretched canvas \n 84" x 36" '
    },
    {
      id: '9',
      url: 'https://live.staticflickr.com/65535/54749310904_de7b86ee66_b.jpg',
      title: '4-29-79',
      description: 'acrylic on unstretched canvas \n 84" x 36"'
    },
    {
      id: '10',
      url: 'https://live.staticflickr.com/65535/54749433135_9acb9f0808_b.jpg',
      title: '5-15-78',
      description: 'acrylic on unstretched canvas \n 60" x 75"'
    },
    {
      id: '11',
      url: 'https://live.staticflickr.com/65535/54749433230_e27d35b4e6_b.jpg',
      title: '8-11-78',
      description: 'acrylic on unstretched canvas \n 35" x 69"'
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">UNSTRETCHED PAINTINGS</h1>
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

export default UnstretchedPaintings;
