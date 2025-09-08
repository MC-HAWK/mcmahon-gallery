import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const CurrentWorkPaintings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54762978071_8a584e36d7_b.jpg',
      title: 'Masks and Rafters',
      description: 'Gouache/Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54762978061_8b1a3aef50_b.jpg',
      title: 'Parenthesis',
      description: 'Acrylic/Oil on Canvas'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54762131102_54b65aceb0_b.jpg',
      title: 'Flaco\'s Purchase',
      description: 'Gouache/Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/54762978086_b776acf372_b.jpg',
      title: 'Snapper',
      description: 'Watercolor on Paper \n 12" x 9"'
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/54762978091_9eda671c05_b.jpg',
      title: 'Hanging Masks',
      description: 'Watercolor on Paper \n 6" x 9"'
    },
    {
      id: '6',
      url: 'https://live.staticflickr.com/65535/54762978131_5a2083c2e6_b.jpg',
      title: 'Pocket Pool',
      description: 'Gouache/Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '7',
      url: 'https://live.staticflickr.com/65535/54762978166_6d0f7e2871_b.jpg',
      title: 'Blindside',
      description: 'Gouache/Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '8',
      url: 'https://live.staticflickr.com/65535/54762978186_4f718ace36_b.jpg',
      title: 'Y and Y-Knot',
      description: 'Oil/Acrylic on Canvas \n 60" x 40"'
    },
    {
      id: '9',
      url: 'https://live.staticflickr.com/65535/54763207904_fc1ecc64fb_b.jpg',
      title: 'Christmas Cracker',
      description: 'Watercolor/Gouache on Paper \n 28" x 36"'
    },
    {
      id: '10',
      url: 'https://live.staticflickr.com/65535/54763207944_f61c8692e6_b.jpg',
      title: 'For R.D.',
      description: 'Oil on Canvas'
    },
    {
      id: '11',
      url: 'https://live.staticflickr.com/65535/54763216103_2b4f3ea3ef_b.jpg',
      title: 'Erin\'s Turn',
      description: 'Watercolor on Paper \n 6" x 9"'
    },
    {
      id: '12',
      url: 'https://live.staticflickr.com/65535/54763216173_ea2b2657b3_b.jpg',
      title: 'Hackberry Drift',
      description: 'Gouache/Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '13',
      url: 'https://live.staticflickr.com/65535/54763216178_2a505ff153_b.jpg',
      title: 'Shady Side 2024',
      description: 'Gouache/Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '14',
      url: 'https://live.staticflickr.com/65535/54763216243_eeb2ef09b9_b.jpg',
      title: 'Hackberry Winter',
      description: 'Gouache/Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '15',
      url: 'https://live.staticflickr.com/65535/54763216288_128b27dcfb_b.jpg',
      title: 'Bones',
      description: 'Watercolor/Gouache on Paper \n 26" x 38"'
    },
    {
      id: '16',
      url: 'https://live.staticflickr.com/65535/54763319930_0474045fbd_b.jpg',
      title: 'Storm Blind',
      description: 'Gouache/Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '17',
      url: 'https://live.staticflickr.com/65535/54763319955_a210c78a09_b.jpg',
      title: 'T with B',
      description: 'Oil/Acrylic on Canvas \n 24" x 10"'
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">CURRENT WORK - PAINTINGS</h1>
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
      <ImageModal image={selectedImage} onClose={handleModalClose} />
    </div>
  );
};

export default CurrentWorkPaintings;
