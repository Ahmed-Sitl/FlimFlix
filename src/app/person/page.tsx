import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/util/FetchData";
import { fetchImage } from "@/util/FetchImages";

const Page = async () => {
  const data = await fetchData(`/person/popular`);

  return (
    <div className="dark:bg-primary-dark dark:text-white">
      <h1 className="pt-5 text-4xl text-center font-semibold">
        Popular People
      </h1>
      <div className="p-5 flex flex-wrap justify-center container mx-auto gap-6 pt-5">
        {data.results.map((person: any) => (
          <Link
            key={person.id}
            href={`/person/${person.id}`}
            className="bg-slate-200 rounded-2xl max-w-[250px] 
            hover:scale-105 duration-200"
          >
            <div className="text-center max-w-[250px]">
              <Image
                width={400}
                height={400}
                priority
                className="w-full h-80 object-cover rounded-t-2xl"
                src={fetchImage(person.profile_path)}
                // src="https://picsum.photos/400/400"
                alt={person.name}
              />
              <h3 className="text-xl font-semibold pb-3">{person.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
