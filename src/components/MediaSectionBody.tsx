import { fetchData } from "@/util/FetchData";
import { fetchImage } from "@/util/FetchImages";
import Image from "next/image";

const MediaSectionBody = async () => {
  const testData = await fetchData("/movie/now_playing");

  return (
    <div>
      <div className="flex gap-5 overflow-x-auto p-5 ">
        {testData.results.map((movie: any) => (
          <div key={movie.id} className="min-w-[200px] relative">
            <Image
              width={500}
              height={500}
              className="rounded-2xl"
              src={fetchImage(movie.poster_path)}
              alt={movie.title}
            />

            <div className="absolute bottom-5 left-5">
              {/* <CircularWithValueLabel value={20} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSectionBody;
