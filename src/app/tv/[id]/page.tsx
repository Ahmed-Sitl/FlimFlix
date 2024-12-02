import ListPage from "@/components/ListPage";
import SingalMovie from "@/components/SingalMovie";
interface Props {
  params: { id: string };
}

const page = async function Page({ params }: Props) {
  const { id } = await params;
  const list = ["popular", "airing_today", "on_the_air", "top_rated"];

  return (
    <>{list.includes(id) ? <ListPage id={id} route="tv" /> : <SingalMovie />}</>
  );
};

export default page;
