"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/util/FetchData";
import Cards from "./Cards";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  name: string;
}

interface FetchDataResponse {
  results: Movie[];
}

interface Props {
  category: string;
}

const MediaSectionBody = ({ category }: Props) => {
  const [testData, setTestData] = useState<FetchDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(category);

        setTestData(data as FetchDataResponse); // Cast data to the expected type
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>; // Render a loading message or spinner while fetching data
  }

  if (!testData || !testData.results) {
    return <p>No data found!</p>; // Handle case where no data is available
  }

  return (
    <div className="flex gap-5 overflow-x-auto p-5">
      {testData.results.map((movie: Movie) => (
        <Cards key={movie.id} movie={movie} route="movie" />
      ))}
    </div>
  );
};

export default MediaSectionBody;
