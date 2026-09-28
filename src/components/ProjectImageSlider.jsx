import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProjectImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-48 overflow-hidden group/image">
      <img
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={previousImage}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2
                     bg-black/50 text-white rounded-full p-2
                     hover:bg-black/70 transition"
        >
          <ArrowLeft size={16} />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2
                     bg-black/50 text-white rounded-full p-2
                     hover:bg-black/70 transition"
        >
          <ArrowRight size={16} />
        </button>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImageSlider;