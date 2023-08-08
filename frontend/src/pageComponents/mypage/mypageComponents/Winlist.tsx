import { useState, useEffect } from "react";
import myGiveawayGet from "@/api/win/myGiveawayGet";
import WinCardlist from "./components/wincardlist";
import useWinListHook from "@/Hooks/mypage/useWinListHook";

const Winlist = () => {

  const { winConfirmList } = useWinListHook();
  return (
    <div>
      <WinCardlist winConfirmList={winConfirmList} />
    </div>
  );
};

export default Winlist;
