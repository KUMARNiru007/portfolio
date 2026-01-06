
import bannerImage from "/mountain.jpg";

const BannerSection = () => {
  return (
    <div className="w-full relative">
      <div className="relative h-auto">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-[200px] sm:h-[270px] object-cover"
          style={{ minHeight: "100px" }}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-white text-base sm:text-xl italic text-center drop-shadow-lg">
           You make your own luck if you stay at it long enough.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
