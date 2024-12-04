import React from "react";
import Image from "next/image";

import { fetchData } from "@/util/FetchData";
import { fetchImage } from "@/util/FetchImages";
import Cards from "@/components/Cards";

import { BsInstagram } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  id: string;
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  name: string;
}

const calculateAge = (birthday: string) => {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const page = async ({ params }: { params: Promise<Props> }) => {
  const { id } = await params;
  const data = await fetchData(
    `/person/${id}?append_to_response=movie_credits,external_ids`
  );
  console.log(data);

  const birthday = data.birthday ? formatDate(data.birthday) : "Unknown";
  const age = data.birthday ? calculateAge(data.birthday) : "Unknown";

  return (
    <div className="dark:bg-primary-dark py-5 dark:text-white">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="flex flex-col px-3">
          <div>
            <Image
              className="object-cover rounded-lg"
              src={fetchImage(data.profile_path)}
              alt={data.name}
              width={450}
              height={675}
            />
          </div>

          <div className="py-5 flex flex-col gap-5 flex-auto">
            <div className="flex gap-5 justify-evenly">
              {data.external_ids.instagram_id && (
                <a
                  href={`https://www.instagram.com/${data.external_ids.instagram_id}`}
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2 
                bg-gradient-to-r from-purple-500 
                to-pink-500 text-white 
                font-semibold rounded-full 
                hover:from-pink-500 hover:to-purple-500 transition duration-300"
                >
                  <BsInstagram className="text-2xl" size={20} />
                  <span
                    className="block overflow-hidden whitespace-nowrap 
               w-0 group-hover:w-[120px] transition-all duration-300 text-2xl"
                  >
                    Instagram
                  </span>
                </a>
              )}
              {data.homepage && (
                <a
                  href={data.homepage}
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2 
                             bg-gradient-to-r from-teal-500 
                           to-green-500 text-white 
                             font-semibold rounded-full 
                            hover:from-green-500 hover:to-teal-500 transition duration-300"
                >
                  <FaLink className="text-2xl" size={20} />
                  <span
                    className="block overflow-hidden whitespace-nowrap 
               w-0 group-hover:w-[80px] transition-all duration-300 text-2xl"
                  >
                    Website
                  </span>
                </a>
              )}
              {data.external_ids.facebook_id && (
                <a
                  className="group flex items-center gap-2 px-4 py-2 
                          bg-gradient-to-r from-blue-600 
                        to-blue-400 text-white 
                          font-semibold rounded-full 
                        hover:from-blue-400 hover:to-blue-600 transition duration-300"
                  href={`https://www.facebook.com/${data.external_ids.facebook_id}`}
                  target="_blank"
                >
                  <FaFacebookF className="text-2xl" size={20} />
                  <span
                    className="block overflow-hidden whitespace-nowrap 
               w-0 group-hover:w-[115px] transition-all duration-300 text-2xl"
                  >
                    Facebook
                  </span>
                </a>
              )}

              {data.external_ids.twitter_id && (
                <a
                  className="group flex items-center gap-2 px-4 py-2 
             bg-gradient-to-r from-gray-800 
             to-black text-white 
             font-semibold rounded-full 
             hover:from-black hover:to-gray-800 transition duration-300"
                  href={`https://twitter.com/${data.external_ids.twitter_id}`}
                  target="_blank"
                >
                  <FaXTwitter className="text-2xl" size={20} />
                  <span
                    className="block overflow-hidden whitespace-nowrap 
               w-0 group-hover:w-[80px] transition-all duration-300 text-2xl"
                  >
                    Twitter
                  </span>
                </a>
              )}
            </div>

            <div className="py-5 flex gap-5 flex-col">
              <h2 className="text-3xl font-semibold">Personal Info</h2>
              <div>
                <h5 className="text-2xl font-semibold">Known For</h5>
                <p>{data.known_for_department}</p>
              </div>

              <div>
                <h5 className="text-2xl font-semibold">Known Credits</h5>
                <p>{data.movie_credits.cast.length}</p>
              </div>

              <div>
                <h5 className="text-2xl font-semibold">Gender</h5>
                <p>
                  {data.gender === 1
                    ? "Female"
                    : data.gender === 2
                    ? "Male"
                    : "Unknown"}
                </p>
              </div>

              <div>
                <h5 className="text-2xl font-semibold">Birthday</h5>
                <p className="text-lg">
                  {birthday} ({age} years old)
                </p>
              </div>

              {data.place_of_birth && (
                <div>
                  <h5 className="text-2xl font-semibold">Place of Birth</h5>
                  <p className="text-lg">{data.place_of_birth}</p>
                </div>
              )}

              {data.also_known_as && (
                <div>
                  <h5 className="text-2xl font-semibold">Also Known As</h5>
                  {data.also_known_as.map((name: string, index: number) => (
                    <p className="text-lg mb-2" key={index}>
                      {name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[100%] lg:w-[54%]">
          <div className="p-5">
            <h1 className="text-6xl font-semibold">{data.name}</h1>
            <h5 className="text-2xl mt-5 font-semibold">Biography</h5>
            <p className="mt-3 text-xl text-justify">{data.biography}</p>
          </div>

          <div className="p-5">
            <h5 className="text-2xl mt-5 font-semibold">Known For</h5>
            <div className="flex gap-5 overflow-x-scroll p-5">
              {data.movie_credits.cast.map((movie: Movie) => (
                <Cards key={movie.id} movie={movie} route="movie" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
