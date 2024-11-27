import React from "react";
import MediaSection from "@/components/MediaSection";

const HomeSection = () => {
  return (
    <div className="bg-primary dark:bg-primary-dark dark:text-white">
      <div className="container mx-auto flex flex-col gap-10 py-10">
        <MediaSection title="Trending" liElements={["Today", "This Week"]} />
        <MediaSection
          title="What's Popular"
          liElements={["Today", "This Week", "This Month"]}
        />
      </div>
    </div>
  );
};

export default HomeSection;
