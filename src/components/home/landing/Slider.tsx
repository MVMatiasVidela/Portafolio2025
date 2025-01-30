'use client';
import { useEffect, useState } from 'react';

type Slide = {
  text: string;
  imageUrl: string;
};

type AutoSliderProps = {
  slides: Slide[];
  duration?: number; // Duración en milisegundos para cada slide
};

const AutoSlider: React.FC<AutoSliderProps> = ({ slides, duration = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, duration);

    return () => clearInterval(interval);
  }, [slides.length, duration]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
      {/* Contenedor de slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-center">
              <img
                src={slide.imageUrl}
                alt={`Slide ${index}`}
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="mt-4 text-lg font-semibold">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Indicadores de barra */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-12 bg-gray-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
