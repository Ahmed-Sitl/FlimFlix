import ListPage from "@/components/ListPage";
import SingalMovie from "@/components/SingalMovie";
interface Props {
  params: { id: string };
}
const page = async function Page({ params }: Props) {
  const { id } = await params;
  const list = ["popular", "upcoming", "now_playing", "top_rated"];

  return (
    <>
      {list.includes(id) ? <ListPage id={id} route="movie" /> : <SingalMovie />}
    </>
  );
};

export default page;
