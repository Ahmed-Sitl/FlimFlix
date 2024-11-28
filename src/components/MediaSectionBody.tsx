import { fetchData } from "@/util/FetchData";
import { fetchImage } from "@/util/FetchImages";
import CircularProgress from "@/components/CircularProgress";
import Image from "next/image";
import Link from "next/link";

const MediaSectionBody = async () => {
  const testData = await fetchData("/movie/now_playing");
  return (
    <div className="flex gap-5 overflow-x-auto p-5">
      {testData.results.map((movie: any) => (
        <div key={movie.id} className="min-w-[200px] relative hover:scale-105">
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <Image
              width={500}
              height={500}
              className="rounded-2xl"
              src={fetchImage(movie.poster_path)}
              alt={movie.title}
            />
            <div className="absolute bottom-14 left-3">
              <CircularProgress value={Math.floor(movie.vote_average * 10)} />
            </div>
            <div className="pt-5 font-black text-center">{movie.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MediaSectionBody;
