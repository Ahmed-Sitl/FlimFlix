import Image from "next/image";
import { headerImage } from "@/util/image";

const HeroSection = () => {
  return (
    <header className="relative h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={headerImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto p-4 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to FlimFlix
        </h1>
        <p className="text-lg md:text-2xl opacity-90 mb-6">
          Discover the latest movies and TV shows
        </p>

        {/* Search Input */}
        <form className="w-full max-w-md">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for movies or shows..."
              className="w-full px-4 py-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="button"
              className="absolute top-0 right-0 px-4 py-3 bg-primary text-black font-bold rounded-r-lg hover:bg-primary-dark hover:text-white"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default HeroSection;
