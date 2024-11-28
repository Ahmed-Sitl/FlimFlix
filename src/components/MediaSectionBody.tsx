"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/util/FetchData";
import { fetchImage } from "@/util/FetchImages";
import CircularProgress from "@/components/CircularProgress";
import Image from "next/image";
import Link from "next/link";
import { getTrendingEndpoint } from "@/services/mediaServices";

// Define the expected structure of the data
interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

interface FetchDataResponse {
  results: Movie[];
}

interface Props {
  Category: string;
}

const MediaSectionBody = ({ Category }: Props) => {
  // Explicitly define the type of testData
  const [testData, setTestData] = useState<FetchDataResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(getTrendingEndpoint("day"));

        setTestData(data as FetchDataResponse); // Cast data to the expected type
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Render a loading message or spinner while fetching data
  }

  if (!testData || !testData.results) {
    return <p>No data found!</p>; // Handle case where no data is available
  }

  return (
    <div className="flex gap-5 overflow-x-auto p-5">
      {testData.results.map((movie: Movie) => (
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
