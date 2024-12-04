import ListPage from "@/components/ListPage";
import SingalMovie from "@/components/SingalMovie";
interface Props {
  id: string;
}

const page = async function Page({ params }: { params: Promise<Props> }) {
  const { id } = await params;
  const list = ["popular", "upcoming", "now_playing", "top_rated"];

  return (
    <>
      {list.includes(id) ? (
        <ListPage id={id} route="movie" />
      ) : (
        <SingalMovie id={id} route="movie" />
      )}
    </>
  );
};

export default page;
