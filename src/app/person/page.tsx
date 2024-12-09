"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Pagination from "@/components/Pagination";

import Spinner from "@/components/Spinner";
import { fetchData } from "@/util/FetchData";

import { fetchImage } from "@/util/FetchImages";
import { female } from "@/util/image";
import { male } from "@/util/image";
import { unknown } from "@/util/image";

interface Props {
  profilePath: string;
  gender: number;
  name: string;
}

const Page = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(`/person/popular?page=${page}`);

        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, [page]);

  const ImagePerson = ({ profilePath, gender, name }: Props) => {
    const defaultImage = (gender: number) => {
      if (gender === 2) {
        return male.src;
      } else if (gender === 1) {
        return female.src;
      } else {
        return unknown.src;
      }
    };

    const [imageUrl, setImageUrl] = useState(defaultImage(gender));

    return (
      <Image
        width={400}
        height={400}
        priority
        className="w-full h-80 object-cover rounded-t-2xl"
        src={imageUrl}
        alt={name}
        onLoad={() => setImageUrl(fetchImage(profilePath))}
        onError={() => {
          setImageUrl(defaultImage(gender));
        }}
      />
    );
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="dark:bg-primary-dark">
          <h1 className="pt-5 text-4xl text-center font-semibold mt-16 dark:text-white">
            Popular People
          </h1>
          <div className="p-5 container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {data.results.map((person: any) => (
                <Link
                  key={person.id}
                  href={`/person/${person.id}`}
                  className="bg-slate-200 rounded-2xl hover:scale-105 duration-200"
                >
                  <div className="text-center">
                    <ImagePerson
                      profilePath={person.profile_path}
                      gender={person.gender}
                      name={person.name}
                    />

                    <h3 className="text-xl font-semibold pb-3">
                      {person.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination
              currentPage={data.page}
              totalPages={data.total_pages > 500 ? 500 : data.total_pages}
              setPage={setPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
