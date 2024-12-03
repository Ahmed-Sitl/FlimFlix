import Link from "next/link";
import Image from "next/image";
import CircularProgress from "@/components/CircularProgress";
import { fetchImage } from "@/util/FetchImages";

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  // overview: string;
  name: string;
}
interface Props {
  movie: MovieData;
  route: string;
}
const Cards = ({ movie, route }: Props) => {
  return (
    <div
      key={movie.id}
      className="dark:text-white relative max-w-[200px] min-w-[200px] hover:scale-105 transition-transform duration-200"
    >
      <Link href={`/${route}/${movie.id}`}>
        <Image
          width={500}
          height={750}
          priority
          className="rounded-2xl w-56 h-80 object-cover"
          src={fetchImage(movie.poster_path)}
          alt={movie.title || movie.name || "Movie Poster"}
        />
        <div className="absolute bottom-8 left-3">
          <CircularProgress value={Math.floor(movie.vote_average * 10)} />
        </div>
        <div className="pt-2 font-bold text-center text-sm text-wrap leading-tight">
          {movie.title || movie.name}
        </div>
      </Link>
    </div>
  );
};

export default Cards;