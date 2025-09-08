import React, { useState } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

const Pre2000Paintings = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    {
      id: '1',
      url: 'https://live.staticflickr.com/65535/54746945742_4b9c87aa0b_b.jpg',
      title: 'Untitled 1983',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '2',
      url: 'https://live.staticflickr.com/65535/54746946177_e5156a7495_b.jpg',
      title: 'Ming.   1986',
      description: 'Acrylic on Canvas \n 72" x 64"'
    },
    {
      id: '3',
      url: 'https://live.staticflickr.com/65535/54747799546_b34276b51b_b.jpg',
      title: 'Mesa  1982',
      description: 'Gouache on Paper \n 40" x 28"'
    },
    {
      id: '4',
      url: 'https://live.staticflickr.com/65535/54747799616_cb1f7194f9_b.jpg',
      title: 'Birthday Dog  1975',
      description: 'Oil on Canvas \n 48" x 60"'
    },
    {
      id: '5',
      url: 'https://live.staticflickr.com/65535/54747799621_5c26e0fe50_b.jpg',
      title: 'Water March 1976',
      description: 'Watercolor on Paper \n 30" x 20"'
    },
    {
      id: '6',
      url: 'https://live.staticflickr.com/65535/54747799681_c3dd58050e_b.jpg',
      title: 'Pocket Drift  1976',
      description: 'Watercolor on Paper \n 20" x 30"'
    },
    {
      id: '7',
      url: 'https://live.staticflickr.com/65535/54747799761_e7c5d1dd25_b.jpg',
      title: 'Pidrum   1983',
      description: 'Acrylic on Canvas \n 66" x 54"'
    },
    {
      id: '8',  
      url: 'https://live.staticflickr.com/65535/54747799791_c7bde35c20_b.jpg',
      title: 'Flagging  1982',
      description: 'Watercolor/Gouache on Paper \n 40" x 28"'
    },
    {
      id: '9',
      url: 'https://live.staticflickr.com/65535/54747799886_77dfc28c74_b.jpg',
      title: 'Sternklang  1985',
      description: 'Acrylic on Canvas \n 72" x 62"'
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
      title: 'https://live.staticflickr.com/65535/54748011488_7d83e8b049_b.jpg',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '12',
      url: 'https://live.staticflickr.com/65535/54748011573_a726e9157a_b.jpg',
      title: 'Brenda\'s Bite 1976',
      description: 'Acrylic on Canvas \n 66" x 84"'
    },
    {
      id: '13',
      url: 'https://live.staticflickr.com/65535/54748011603_8a96a627bc_b.jpg',
      title: 'Swingtime  1976',
      description: 'Watercolor on Paper \n 38" x 28"'
    },
    {
      id: '14',
      url: 'https://live.staticflickr.com/65535/54748011643_13de682629_b.jpg',
      title: 'PopPocket 1976',
      description: 'acrylic on canvas 60 x 72'
    },
    {
      id: '15',
      url: 'https://live.staticflickr.com/65535/54748011703_af27096b83_b.jpg',
      title: 'Untitled. 1984',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '16',
      url: 'https://live.staticflickr.com/65535/54748011738_6a41605655_b.jpg',
      title: 'Untitled.  1984',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '17',
      url: 'https://live.staticflickr.com/65535/54748011883_44c0bee62e_b.jpg',
      title: 'Bitches Brew   1977',
      description: 'Acrylic on Canvas \n 72" x 61"'
    },
    {
      id: '18',
      url: 'https://live.staticflickr.com/65535/54748011948_a0e1dcbb5a_b.jpg',
      title: 'Untitled 1977',
      description: 'Watercolor on Paper \n 30" x 22"'
    },
    {
      id: '19',
      url: 'https://live.staticflickr.com/65535/54748015709_5f459654ce_b.jpg',
      title: 'Untitled. 1982',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '20',
      url: 'https://live.staticflickr.com/65535/54748015869_10de3fcf38_b.jpg',
      title: 'Untitled. 1983',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '21',
      url: 'https://live.staticflickr.com/65535/54748015979_c59d88433b_b.jpg',
      title: 'Red Crossing.  1981',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '22',
      url: 'https://live.staticflickr.com/65535/54748144840_3ef5d05712_b.jpg',
      title: 'Folding  1984',
      description: 'Watercolor/Gouache on Paper \n 38" x 28"'
    },
    {
      id: '23',
      url: 'https://live.staticflickr.com/65535/54748144910_de1a36e16f_b.jpg',
      title: 'Ftan   1985',
      description: 'Acrylic on Canvas \n 72" x 64"'
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
      <h1 className="font-bold uppercase text-4xl tracking-widest mb-8 text-center">PRE 2000 - PAINTINGS</h1>
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

export default Pre2000Paintings;
