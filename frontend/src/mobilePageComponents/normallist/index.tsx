"use client";
import useNormalHook from "@/Hooks/mobilelistpage/useNormalHook";
import Cardlist from "@/mobileComponents/cardlist";
import Mobiletitle from "@/mobileComponents/mobiletitle";

const Normallist = () => {
  const { cards } = useNormalHook();
  return (
    <>
      <Mobiletitle text="Time Attack" />
      <Cardlist cards={cards} contentType="normallist"></Cardlist>
    </>
  );
};

export default Normallist;
