import React, { useState, useEffect } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

interface ImageModalProps {
  image: Image | null;
  images: Image[];
  currentIndex: number;
  onClose: (e: React.MouseEvent) => void;
  onNavigate: (index: number) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, images, currentIndex, onClose, onNavigate }) => {
  const [isLaptopHeight, setIsLaptopHeight] = useState(false);

  useEffect(() => {
    const checkViewportHeight = () => {
      setIsLaptopHeight(window.innerHeight >= 600 && window.innerHeight <= 800);
    };
    
    checkViewportHeight();
    window.addEventListener('resize', checkViewportHeight);
    
    return () => window.removeEventListener('resize', checkViewportHeight);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!image) return;
      
      switch (e.key) {
        case 'Escape':
          onClose(e as any);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (currentIndex > 0) {
            onNavigate(currentIndex - 1);
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (currentIndex < images.length - 1) {
            onNavigate(currentIndex + 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, currentIndex, images.length, onClose, onNavigate]);

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

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Create a synthetic event that mimics backdrop click behavior
    const syntheticEvent = {
      ...e,
      target: e.currentTarget,
      currentTarget: e.currentTarget
    } as React.MouseEvent;
    onClose(syntheticEvent);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={handleCloseClick}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 text-gray-300 hover:text-white transition-colors duration-200 p-2"
        aria-label="Close"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous arrow */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 text-gray-300 hover:text-white transition-colors duration-200 p-2"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 text-gray-300 hover:text-white transition-colors duration-200 p-2"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center image-modal-container px-8 sm:px-12">
        <div className="flex items-center justify-center w-full">
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
