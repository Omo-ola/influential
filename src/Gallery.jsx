import { useState } from "react";

const images = [
  "/abu-1.jpg",
  "/abu-2.jpg",
  "/abu-3.jpg",
  "/abu-4.jpg",
  "/abu-5.jpg",
  "/abu-6.jpg",
  "/abu-7.jpg",
  "/abu-8.jpg",
  "/abu-9.jpg",
  "/abu-10.jpg",
  "/abu-11.jpg",
  "/abu-12.jpg",
  "/abu-13.jpg",
  "/abu-14.jpg",
  "/abu-15.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="w-full mx-auto px-4">
      {/* Grid for 8 images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
        {images.slice(0, 8).map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => openImage(index)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeImage}
          >
            ✖
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevImage}
          >
            ◀
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextImage}
          >
            ▶
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
