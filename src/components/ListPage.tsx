"use client";
import Cards from "@/components/Cards";
import { fetchData } from "@/util/FetchData";
import Pagination from "@/components/Pagination";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

interface Props {
  id: string;
  route: string;
}

const ListPage = ({ id, route }: Props) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(`/${route}/${id}?page=${page}`);

        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, [page]);

  const format = (str: string) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(" ");
  };
  const title = format(id);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="bg-gray-100 dark:bg-primary-dark">
          <div className="container mx-auto px-3 mt-16">
            <div className="text-center container mx-auto">
              <h1 className="pt-5 text-4xl font-semibold dark:text-white">
                {title} Movies
              </h1>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row py-10 text-center">
              <div className="rounded-lg container mx-auto bg-primary flex-1 min-w-64">
                <p>Filter will be coming soon</p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 container mx-auto p-5 max-w-7xl">
                {data.results.map((movie: any) => (
                  <Cards key={movie.id} movie={movie} route={route} />
                ))}
                <Pagination
                  currentPage={data.page}
                  totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                  setPage={setPage}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListPage;
