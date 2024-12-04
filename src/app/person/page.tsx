import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/util/FetchData";
import { fetchImage } from "@/util/FetchImages";

const Page = async () => {
  const data = await fetchData(`/person/popular`);

  return (
    <div className="dark:bg-primary-dark">
      <h1 className="pt-5 text-4xl text-center font-semibold">
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
                <Image
                  width={400}
                  height={400}
                  priority
                  className="w-full h-80 object-cover rounded-t-2xl"
                  src={fetchImage(person.profile_path)}
                  alt={person.name}
                />
                <h3 className="text-xl font-semibold pb-3">{person.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
