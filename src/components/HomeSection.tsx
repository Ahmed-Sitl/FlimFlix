import React from "react";
import MediaSection from "@/components/MediaSection";
import trending from "@/data/categories/trending.json";
import popular from "@/data/categories/popular.json";
import free from "@/data/categories/free.json";

const HomeSection = () => {
  return (
    <div className="bg-primary dark:bg-primary-dark dark:text-white">
      <div className="container mx-auto flex flex-col gap-16 px-3 py-10">
        <MediaSection title="Trending" categories={trending} />
        <MediaSection title="What's Popular" categories={popular} />
        <MediaSection title="Free To Watch" categories={free} />
      </div>
    </div>
  );
};

export default HomeSection;
