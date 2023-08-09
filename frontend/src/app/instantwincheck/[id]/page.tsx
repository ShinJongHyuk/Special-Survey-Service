import Instantwincheck from "@/pageComponents/instantwincheck";

export default function ({ params }: { params: { id: string } }) {
  return <Instantwincheck id={params.id}></Instantwincheck>;
}
