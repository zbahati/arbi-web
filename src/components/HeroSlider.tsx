import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/3.jpg",
    title: "Touching Hearts Transforming Nations",
    subtitle: "Impacting Hearts-Heads-Hands"
  },
  {
    image: "/2.jpg",
    title: "",
    subtitle: ""
  },
  {
    image: "/11.jpg",
    title: "Empowering Communities",
    subtitle: "Supporting sustainable development"
  },
  {
    image: "/7.jpg",
    title: "Healing Hearts",
    subtitle: "Restoring hope and dignity"
  },
  {
    image: "/8.jpg",
    title: "",
    subtitle: ""
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              }}
            />
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 transform transition-transform duration-1000 translate-y-0">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl mb-8">
                  {slide.subtitle}
                </p>
                {index === 0 && (
                  <>
                    <div className="max-w-3xl mx-auto mt-8 mb-12">
                      <blockquote className="text-xl italic">
                        "Your people will rebuild the ancient ruins and will raise up the age-old foundations;
                        you will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
                        <footer className="mt-2 font-semibold">Isaiah 58:6-12</footer>
                      </blockquote>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;