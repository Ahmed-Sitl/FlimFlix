import MediaSectionHead from "@/components/MediaSectionHead";
import MediaSectionBody from "@/components/MediaSectionBody";
// import fetchData from "@/services/FetchData";
import { fetchData } from "@/util/FetchData";
import { fetchImage } from "@/util/FetchImages";

interface MediaSectionProps {
  title: string;
  liElements: string[];
}

const MediaSection = async ({ title, liElements }: MediaSectionProps) => {
  return (
    <div className="flex flex-col gap-10">
      <MediaSectionHead title={title} liElements={liElements} />
      <MediaSectionBody />
    </div>
  );
};

export default MediaSection;
