import React, { useState, useEffect } from 'react';
import ImageModal from '../components/ImageModal';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Pre2000Paintings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54746946177_e5156a7495_b.jpg',
      title: 'Ming.   1986',
      description: 'Acrylic on Canvas \n 72" x 64"'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54747799886_77dfc28c74_b.jpg',
      title: 'Sternklang  1985',
      description: 'Acrylic on Canvas \n 72" x 62"'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54748144910_de1a36e16f_b.jpg',
      title: 'Ftan 1985',
      description: 'Acrylic on Canvas \n 72" x 64"'
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/54748011703_af27096b83_b.jpg',
      title: 'Untitled. 1984',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/54748011738_6a41605655_b.jpg',
      title: 'Untitled.  1984',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '6',
      url: 'https://live.staticflickr.com/65535/54748144840_3ef5d05712_b.jpg',
      title: 'Folding 1984',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '7',
      url: 'https://live.staticflickr.com/65535/54887212535_0cf291a769_b.jpg',
      title: 'Untitled, 1984',
      description: 'Gouache on Paper \n 37" x 28"'
    },
    {
      id: '8',
      url: 'https://live.staticflickr.com/65535/54746945742_4b9c87aa0b_b.jpg',
      title: 'Untitled 1983',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '9',
      url: 'https://live.staticflickr.com/65535/54747799761_e7c5d1dd25_b.jpg',
      title: 'Pidrum   1983',
      description: 'Acrylic on Canvas \n 66" x 54"'
    },
    {
      id: '10',
      url: 'https://live.staticflickr.com/65535/54747799931_d40f2fb38f_b.jpg',
      title: 'Persimmon Shift  1983',
      description: 'Acrylic/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '11',
      url: 'https://live.staticflickr.com/65535/54748011488_7d83e8b049_b.jpg',
      title: 'Double Cross. 1983',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '12',
      url: 'https://live.staticflickr.com/65535/54748015869_10de3fcf38_b.jpg',
      title: 'Untitled. 1983',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '13',
      url: 'https://live.staticflickr.com/65535/54886924866_20e53b5ec8_b.jpg',
      title: 'Untitled 1983',
      description: 'acrylic on canvas \n 62" x 46"'
    },
    {
      id: '14',
      url: 'https://live.staticflickr.com/65535/54887165324_5609f54545_b.jpg',
      title: 'Innerspin 1983',
      description: 'gouache on paper \n 38" x 26"'
    },
    {
      id: '15',
      url: 'https://live.staticflickr.com/65535/54747799546_b34276b51b_b.jpg',
      title: 'Mesa  1982',
      description: 'Gouache on Paper \n 40" x 28"'
    },
    {
      id: '16',
      url: 'https://live.staticflickr.com/65535/54747799791_c7bde35c20_b.jpg',
      title: 'Flagging  1982',
      description: 'Watercolor/Gouache on Paper \n 40" x 28"'
    },
    {
      id: '17',
      url: 'https://live.staticflickr.com/65535/54748015709_5f459654ce_b.jpg',
      title: 'Untitled. 1982',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '18',
      url: 'https://live.staticflickr.com/65535/54887144468_3f906a9b62_b.jpg',
      title: 'Untitled 1982',
      description: 'gouache on paper \n 40" x 28"'
    },
    {
      id: '19',
      url: 'https://live.staticflickr.com/65535/54748015979_c59d88433b_b.jpg',
      title: 'Red Crossing. 1981',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '20',
      url: 'https://live.staticflickr.com/65535/54886924766_79dcc403fe_b.jpg',
      title: 'Grid-el 1981',
      description: 'acrylic on masonite \n 95" x 38"'
    },
    {
      id: '21',
      url: 'https://live.staticflickr.com/65535/54748011883_44c0bee62e_b.jpg',
      title: 'Bitches Brew   1977',
      description: 'Acrylic on Canvas \n 72" x 61"'
    },
    {
      id: '22',
      url: 'https://live.staticflickr.com/65535/54748011948_a0e1dcbb5a_b.jpg',
      title: 'Untitled 1977',
      description: 'Watercolor on Paper \n 30" x 22"'
    },
    {
      id: '23',
      url: 'https://live.staticflickr.com/65535/54887165124_4aac8c98af_b.jpg',
      title: 'Untitled, 1977',
      description: 'Watercolor on Paper \n 30" x 22"'
    },
    {
      id: '24',
      url: 'https://live.staticflickr.com/65535/54887165134_6f17395141_b.jpg',
      title: 'Untitled, 1977',
      description: 'Watercolor on Paper \n 30" x 22"'
    },
    {
      id: '25',
      url: 'https://live.staticflickr.com/65535/54887212530_2983d0969e_b.jpg',
      title: 'Untitled, 1977',
      description: 'Acrylic on Canvas \n 72" x 72"'
    },
    {
      id: '26',
      url: 'https://live.staticflickr.com/65535/54747799621_5c26e0fe50_b.jpg',
      title: 'Water March 1976',
      description: 'Watercolor on Paper \n 30" x 20"'
    },
    {
      id: '27',
      url: 'https://live.staticflickr.com/65535/54747799681_c3dd58050e_b.jpg',
      title: 'Pocket Drift  1976',
      description: 'Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '28',
      url: 'https://live.staticflickr.com/65535/54748011573_a726e9157a_b.jpg',
      title: 'Brenda\'s Bite 1976',
      description: 'Acrylic on Canvas \n 66" x 84"'
    },
    {
      id: '29',
      url: 'https://live.staticflickr.com/65535/54748011603_8a96a627bc_b.jpg',
      title: 'Swingtime  1976',
      description: 'Watercolor on Paper \n 38" x 28"'
    },
    {
      id: '30',
      url: 'https://live.staticflickr.com/65535/54748011643_13de682629_b.jpg',
      title: 'PopPocket 1976',
      description: 'acrylic on canvas 60 x 72'
    },
    {
      id: '31',
      url: 'https://live.staticflickr.com/65535/54886047407_1a965d972e_b.jpg',
      title: 'Side Pocket 1976',
      description: 'Acrylic on Canvas \n 60" x 60"'
    },
    {
      id: '32',
      url: 'https://live.staticflickr.com/65535/54886047457_dc20be3143_b.jpg',
      title: 'Hanger 1976',
      description: 'Gouache on Paper \n 26" x 38"'
    },
    {
      id: '33',
      url: 'https://live.staticflickr.com/65535/54886925001_5dcb6f36dc_b.jpg',
      title: 'Landscape, 1976',
      description: 'Acrylic on Canvas \n 72" x 48"'
    },
    {
      id: '34',
      url: 'https://live.staticflickr.com/65535/54887144448_d64de287c2_b.jpg',
      title: 'Stars and Bars, 1976',
      description: 'Acrylic on Canvas \n 72" x 48"'
    },
    {
      id: '35',
      url: 'https://live.staticflickr.com/65535/54887144523_e9c8d41e48_b.jpg',
      title: 'Airshift 1976',
      description: 'watercolor \n 30" x 20"'
    },
    {
      id: '36',
      url: 'https://live.staticflickr.com/65535/54887165209_2de792749f_b.jpg',
      title: 'Arctic Lift 1976',
      description: 'watercolor \n 20" x 30"'
    },
    {
      id: '37',
      url: 'https://live.staticflickr.com/65535/54747799616_cb1f7194f9_b.jpg',
      title: 'Birthday Dog  1975',
      description: 'Oil on Canvas \n 48" x 60"'
    },
    {
      id: '38',
      url: 'https://live.staticflickr.com/65535/54887165289_7841a780c2_b.jpg',
      title: 'Polkadrop 1975',
      description: 'oil on canvas \n 66" x 84"'
    },
    {
      id: '39',
      url: 'https://live.staticflickr.com/65535/54886047522_f0f59c912d_b.jpg',
      title: 'Swingshift.',
      description: '72 x 84'
    },
    {
      id: '40',
      url: 'https://live.staticflickr.com/65535/54886924986_beca727bed_b.jpg',
      title: 'Untitled.',
      description: '50 x 72'
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">Work Pre 2000 - Paintings</h1>
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

export default Pre2000Paintings;
