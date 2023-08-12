"use client";
import useSpeedyHook from "@/Hooks/mobilelistpage/useSpeedyHook";
import Cardlist from "@/mobileComponents/cardlist";
import Mobiletitle from "@/mobileComponents/mobiletitle";

const Speedyattacklist = ({ from }: { from?: string }) => {
  const { cards } = useSpeedyHook();
  return (
    <>
      {from === "main" ? <Mobiletitle text="All Surveys" /> : <Mobiletitle text="Speedy Attack" />}
      <Cardlist cards={cards} contentType="speedy"></Cardlist>
    </>
  );
};

export default Speedyattacklist;
