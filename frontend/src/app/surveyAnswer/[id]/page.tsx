import Viewcheck from "@/pageComponents/viewcheck";

export default function Page({ params }: { params: { id: string } }) {
  return <Viewcheck page="surveyanswer" id={params.id} />;
}
