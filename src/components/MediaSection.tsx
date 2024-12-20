"use client";
import MediaSectionHead from "@/components/MediaSectionHead";
import MediaSectionBody from "@/components/MediaSectionBody";
import { useState } from "react";

interface Trending {
  id: string;
  name: string;
  value: string;
}

interface Props {
  title: string;
  categories: Trending[];
}

const MediaSection = ({ title, categories }: Props) => {
  const [Category, setCategory] = useState<Trending>(categories?.[0]);
  return (
    <div className="flex flex-col gap-10">
      <MediaSectionHead
        title={title}
        categories={categories}
        Category={Category.name}
        setCategory={setCategory}
      />
      <MediaSectionBody category={Category.value} />
    </div>
  );
};

export default MediaSection;
