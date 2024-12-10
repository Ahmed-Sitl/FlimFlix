"use client";

import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchData } from "@/util/FetchData";
import Cards from "@/components/Cards";
import Pagination from "@/components/Pagination";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) {
      router.push("/");
      return;
    }

    const fetchDataAsync = async () => {
      try {
        // const data = await fetchData(`/search/keyword?query=${query}&page=1`);
        const data = await fetchData(
          `/search/multi?query=${query}&page=${page}`
        );
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, [query, router, page]);

  if (!query) {
    return <Spinner />;
  }

  return (
    <div className="mt-16 bg-primary dark:bg-primary-dark dark:text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center pt-5">
          Search Page {query}
        </h1>
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.results?.map((movie: any) => (
            <div key={movie.id} className="p-4">
              <Cards movie={movie} route={movie.media_type} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center text-black">
          <Pagination
            currentPage={data.page}
            totalPages={data.total_pages > 500 ? 500 : data.total_pages}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
