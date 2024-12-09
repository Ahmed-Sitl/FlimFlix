"use client";
import Image from "next/image";
import { fetchData } from "@/util/FetchData";
import { fetchImage } from "@/util/FetchImages";
import { useEffect, useState } from "react";
import { placeholder } from "@/util/image";
import { noImage } from "@/util/image";
import CircularProgress from "./CircularProgress";
import Cards from "./Cards";
import Spinner from "./Spinner";

interface Props {
  id: string;
  route: string;
}

interface PropsImage {
  profilePath: string;
  name: string;
  placeholder: string;
  cover: boolean;
}

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const SingalMovie = ({ id, route }: Props) => {
  const [data, setData] = useState<any>([]);
  const [trailer, setTrailer] = useState<string | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(`/${route}/${id}`);
        const videos = await fetchData(`/${route}/${id}/videos`);
        const credits = await fetchData(`/${route}/${id}/credits`);
        const recommendationsData = await fetchData(
          `/${route}/${id}/recommendations`
        );

        console.log(data);
        console.log(credits);

        // Find the trailer video (usually type 'Trailer' and site 'YouTube')
        const trailerVideo = videos.results.find(
          (video: { type: string; site: string }) =>
            video.type === "Trailer" && video.site === "YouTube"
        );

        setData(data);
        setCast(credits.cast);
        setRecommendations(recommendationsData.results);

        if (trailerVideo) {
          setTrailer(`https://www.youtube.com/embed/${trailerVideo.key}`);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, [id, route]);

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatBudget = (budget: number) => {
    if (budget >= 1000000) {
      return (budget / 1000000).toFixed(1) + "m"; // Convert to millions
    } else if (budget >= 1000) {
      return (budget / 1000).toFixed(1) + "k"; // Convert to thousands
    } else {
      return budget.toLocaleString(); // Format with commas
    }
  };

  const ImageMedia = ({
    profilePath,
    name,
    placeholder,
    cover,
  }: PropsImage) => {
    const [imageUrl, setImageUrl] = useState(placeholder);
    if (cover) {
      return (
        <Image
          priority
          fill
          objectFit="cover"
          quality={100}
          className="w-full h-80 object-cover"
          src={imageUrl}
          alt={name}
          onLoad={() => setImageUrl(fetchImage(profilePath))}
          onError={() => {
            setImageUrl(placeholder);
          }}
        />
      );
    }
    return (
      <Image
        src={imageUrl}
        className="rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300"
        alt={name}
        quality={100}
        width={900} // Increased width
        height={900} // Increased height
        onLoad={() => setImageUrl(fetchImage(profilePath))}
        onError={() => {
          setImageUrl(placeholder);
        }}
      />
    );
  };

  return (
    <>
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div className="mt-16">
          <div className="relative h-[60vh]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageMedia
                name={data.title}
                profilePath={data.poster_path}
                placeholder={placeholder.src}
                cover={true}
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Content */}
            <div className="relative container mx-auto p-4 flex items-center gap-16 h-full text-white">
              <a href={data.homepage}>
                <ImageMedia
                  cover={false}
                  profilePath={data.poster_path}
                  name={data.title}
                  placeholder={noImage.src}
                />
              </a>

              <div>
                <h1 className="text-2xl md:text-5xl font-bold mb-4">
                  {data.title}{" "}
                  <span className="font-sans font-normal">
                    ({data.release_date.slice(0, 4)})
                  </span>
                </h1>
                <p className="text-lg md:text-2xl -mt-8 mx-5 mb-5">
                  {data.release_date} ({data.origin_country}){" "}
                  <span className="font-bold text-5xl"> . </span>
                  {data.genres.map(
                    (genre: { name: string }) => genre.name + ", "
                  )}
                  <span className="font-bold text-5xl"> . </span>
                  <span>{formatRuntime(data.runtime)}</span>
                </p>
                <div className="flex items-center mb-5">
                  <CircularProgress
                    value={Math.floor(data.vote_average * 10)}
                  />
                  <p className="text-lg md:text-2xl mb-6 mx-5 pt-5">
                    {data.tagline}
                  </p>
                </div>
                <div>
                  <p className="text-lg md:text-4xl mb-3">Overview</p>
                  <p className="text-lg md:text-2xl mb-6">{data.overview}</p>
                </div>
                <div>
                  <h5 className="text-lg md:text-4xl mb-3">Budget</h5>
                  <p className="text-lg md:text-2xl mb-6 font-bold">
                    {formatBudget(data.budget)} $
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary dark:bg-primary-dark dark:text-white pt-6">
            <div className="container mx-auto flex gap-10 ">
              <div>
                <h5 className="text-3xl md:text-5xl pb-3">Trailer</h5>
                {trailer ? (
                  <iframe
                    width="600"
                    height="360"
                    src={trailer}
                    title="Movie Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-[600px] h-[360px]">
                    <Image
                      objectFit="cover"
                      className="w-full h-full"
                      src={noImage}
                      alt="No Trailer"
                      width={600}
                      height={360}
                    />
                  </div>
                )}
              </div>
              <div className="w-full overflow-hidden">
                <h5 className="text-3xl md:text-5xl pb-3">Cast</h5>
                <div className="flex gap-5 overflow-x-auto p-5 max-w-full">
                  {cast.map((actor: any) => (
                    <Cards key={actor.id} movie={actor} route="person" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="bg-primary dark:bg-primary-dark dark:text-white pt-12">
            <div className="container mx-auto">
              <h5 className="text-3xl md:text-5xl pb-3">Recommendations</h5>
              <div className="flex gap-5 overflow-x-auto p-5 max-w-full">
                {recommendations.length > 0 ? (
                  recommendations.map((movie: any) => (
                    <Cards key={movie.id} movie={movie} route="movie" />
                  ))
                ) : (
                  <p>No recommendations available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingalMovie;
