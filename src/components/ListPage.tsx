import Cards from "@/components/Cards";
import { fetchData } from "@/util/FetchData";

interface Props {
  id: string;
  route: string;
}

const ListPage = async ({ id, route }: Props) => {
  const data = await fetchData(`/${route}/${id}`);
  console.log(data);
  const format = (str: string) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(" ");
  };
  const title = format(id);

  return (
    <div className="bg-gray-100 dark:bg-primary-dark">
      <div className="container mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
