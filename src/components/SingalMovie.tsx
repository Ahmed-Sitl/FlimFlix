import { fetchData } from "@/util/FetchData";

interface Props {
  id: string;
  route: string;
}
const SingalMovie = async ({ id, route }: Props) => {
  const data = await fetchData(`/${route}/${id}`);
  console.log(data);

  return <div>SingalMovie</div>;
};

export default SingalMovie;
