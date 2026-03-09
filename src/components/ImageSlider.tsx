import React, { useState, useEffect } from 'react';

export interface SliderImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface ImageSliderProps {
  images: SliderImage[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  autoPlay = false, 
  interval = 3000,
  showDots = true,
  showArrows = true,
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className="aspect-video relative">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
            {images[currentIndex].caption}
          </div>
        )}
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800"
          >
            →
          </button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
