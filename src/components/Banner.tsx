
import { useEffect, useState } from "react";
import bannerImage from "/mountain.webp";

const BannerSection = () => {
  const [isLoaded, setIsLoaded] = useState(() => {
    if (typeof Image === "undefined") {
      return false;
    }

    const img = new Image();
    img.src = bannerImage;
    return img.complete;
  });

  useEffect(() => {
    if (isLoaded) {
      return;
    }

    const preloaded = new Image();
    preloaded.src = bannerImage;

    preloaded.onload = () => setIsLoaded(true);
    preloaded.onerror = () => setIsLoaded(true);
  }, [isLoaded]);

  return (
    <div className="w-full relative fade-in">
      <div className="relative h-auto">
        <div
          aria-hidden="true"
          className={`absolute inset-0 h-[200px] sm:h-[270px] rounded-none bg-zinc-200 dark:bg-zinc-800 transition-opacity duration-300 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <img
          src={bannerImage}
          alt="Banner"
          className={`w-full h-[200px] sm:h-[270px] object-cover will-change-transform transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            minHeight: "100px",
            contain: "layout style paint",
          }}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-white text-base sm:text-xl italic text-center drop-shadow-lg">
           The only way to predict the future is to build it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
