import ListPage from "@/components/ListPage";
import SingalMovie from "@/components/SingalMovie";
interface Props {
  id: string;
}

const page = async function Page({ params }: { params: Promise<Props> }) {
  const id = (await params).id;
  const list = ["popular", "airing_today", "on_the_air", "top_rated"];

  return (
    <>{list.includes(id) ? <ListPage id={id} route="tv" /> : <SingalMovie />}</>
  );
};

export default page;
