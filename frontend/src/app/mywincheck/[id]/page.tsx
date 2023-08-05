import Mywincheck from "@/pageComponents/mywincheck";

export default function ({ params }: { params: { id: string } }) {
  return <Mywincheck id={params.id}></Mywincheck>;
}
