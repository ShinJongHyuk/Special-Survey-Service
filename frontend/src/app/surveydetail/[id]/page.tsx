import Viewcheck from "@/pageComponents/viewcheck";

export default function Page({ params }: { params: { id: string } }) {
  return <Viewcheck id={params.id} page="surveydetail"></Viewcheck>;
}
