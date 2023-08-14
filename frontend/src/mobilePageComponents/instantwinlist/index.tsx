"use client";
import Mobiletitle from "@/mobileComponents/mobiletitle";
import Cardlist from "@/mobileComponents/cardlist";
import useInstantHook from "@/Hooks/mobilelistpage/useInstantHook";

const Instantwinlist = () => {
  const { cards } = useInstantHook();

  return (
    <>
      <Mobiletitle text="Instant Win" />
      <Cardlist cards={cards} contentType="instantwin"></Cardlist>
    </>
  );
};

export default Instantwinlist;
