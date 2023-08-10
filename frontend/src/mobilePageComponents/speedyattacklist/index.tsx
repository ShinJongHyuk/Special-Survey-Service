"use client";
import useSpeedyHook from "@/Hooks/mobilelistpage/useSpeedyHook";
import Cardlist from "@/mobileComponents/cardlist";
import Mobiletitle from "@/mobileComponents/mobiletitle";

const Speedyattacklist = () => {
  const { cards } = useSpeedyHook();
  return (
    <>
      <Mobiletitle text="Speedy Attack" />
      <Cardlist cards={cards} contentType="speedy"></Cardlist>
    </>
  );
};

export default Speedyattacklist;
