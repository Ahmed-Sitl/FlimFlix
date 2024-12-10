"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import CircularProgress from "@/components/CircularProgress";
import { fetchImage } from "@/util/FetchImages";
import { noImage } from "@/util/image";

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  // overview: string;
  name: string;
  profile_path?: string;
}
interface Props {
  movie: MovieData;
  route: string;
}
const Cards = ({ movie, route }: Props) => {
  const [imageUrl, setImageUrl] = useState(noImage.src);
  return (
    <div
      key={movie.id}
      className="relative dark:text-white max-w-[200px] min-w-[200px] hover:scale-105 transition-transform duration-200"
    >
      <Link href={`/${route}/${movie.id}`}>
        <Image
          width={500}
          height={750}
          priority
          className="rounded-2xl w-56 h-80 object-cover"
          // src={fetchImage(movie.poster_path || movie.profile_path || "")}
          src={imageUrl}
          onLoad={() =>
            setImageUrl(
              fetchImage(movie.poster_path || movie.profile_path || "")
            )
          }
          onError={() => setImageUrl(noImage.src)}
          alt={movie.title || movie.name || "Movie Poster"}
        />
        {movie.vote_average && (
          <div className="absolute bottom-10 left-3">
            <CircularProgress value={Math.floor(movie.vote_average * 10)} />
          </div>
        )}
        <div className="mt-2 font-bold text-center text-sm text-wrap leading-tight">
          {movie.title || movie.name}
        </div>
      </Link>
    </div>
  );
};

export default Cards;
