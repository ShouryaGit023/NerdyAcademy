import { useState, useEffect } from 'react';

interface AutoSlideshowProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
  imageClassName?: string;
  objectFit?: 'cover' | 'contain';
}

export function AutoSlideshow({ 
  images, 
  interval = 3500, 
  imageClassName = "opacity-80",
  objectFit = 'cover'
}: AutoSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {images.map((image, idx) => (
        <div 
          key={idx} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-black/20 ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${imageClassName}`}
          />
        </div>
      ))}
      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'bg-primary w-6 opacity-100' : 'bg-white/40 w-1.5 opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}
