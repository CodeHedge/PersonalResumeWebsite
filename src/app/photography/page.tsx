'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Photo {
  name: string;
  src: string;
}

export default function Photography() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // In a real application, you would fetch this from an API
    // For now, we'll use the public directory
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error('Error loading photos:', error));
  }, []);

  const handlePhotoClick = (photo: Photo, index: number) => {
    setIsLoading(true);
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    const newIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8 text-primary-red">Photography</h1>
        <motion.div 
          className="photo-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.name}
              className="photo-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handlePhotoClick(photo, index)}
            >
              <Image
                src={photo.src}
                alt={photo.name}
                width={400}
                height={300}
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary-dark">
                  <div className="w-12 h-12 border-4 border-primary-red border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.name}
                width={1200}
                height={800}
                className={`modal-image ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
                onLoad={handleImageLoad}
                priority
              />
              <button
                className="modal-close"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                className="modal-nav modal-prev"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="modal-nav modal-next"
                onClick={handleNext}
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 