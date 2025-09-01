import React, { useState, useEffect } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

interface ImageModalProps {
  image: Image | null;
  onClose: (e: React.MouseEvent) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const [isLaptopHeight, setIsLaptopHeight] = useState(false);

  useEffect(() => {
    const checkViewportHeight = () => {
      setIsLaptopHeight(window.innerHeight >= 600 && window.innerHeight <= 800);
    };
    
    checkViewportHeight();
    window.addEventListener('resize', checkViewportHeight);
    
    return () => window.removeEventListener('resize', checkViewportHeight);
  }, []);

  if (!image) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const container = img.closest('.image-modal-container') as HTMLElement;
    if (container) {
      container.style.setProperty('--image-width', `${img.offsetWidth}px`);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center image-modal-container">
        <div className="flex items-center justify-center">
          <img
            src={image.url}
            alt={image.title || ''}
            className="max-w-full max-h-[75vh] object-contain"
            style={{
              maxHeight: isLaptopHeight ? '85vh' : '75vh'
            }}
            onLoad={handleImageLoad}
          />
        </div>
        {(image.title || image.description) && (
          <div className="bg-black bg-opacity-75 text-white p-3 sm:p-4 mt-1 rounded" style={{ width: 'var(--image-width, auto)' }}>
            {image.title && (
              <h3 className="text-base sm:text-lg font-semibold mb-2">{image.title}</h3>
            )}
            {image.description && (
              <p className="text-xs sm:text-sm whitespace-pre-line">{image.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
