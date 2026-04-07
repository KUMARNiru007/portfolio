import { useRef } from 'react';

export const useImageLoad = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const waitForImageLoad = (): Promise<void> => {
    return new Promise((resolve) => {
      if (!imageRef.current) {
        resolve();
        return;
      }

      const img = imageRef.current;

      // If image is already loaded
      if (img.complete) {
        resolve();
        return;
      }

      // Wait for image to load
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Resolve even on error to prevent hanging

      // Timeout after 5 seconds
      const timeout = setTimeout(() => resolve(), 5000);

      return () => clearTimeout(timeout);
    });
  };

  return { imageRef, waitForImageLoad };
};
