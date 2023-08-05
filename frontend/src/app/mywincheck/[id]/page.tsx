import Mywincheck from "@/pageComponents/mywincheck";

export default function Page({ params }: { params: { giveawayId: string } }) {
  return <Mywincheck giveawayId={params.giveawayId}></Mywincheck>;
}
