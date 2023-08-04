import { useState, useEffect } from "react";
import myGiveawayGet from "@/api/win/myGiveawayGet";
import WinCardlist from "./wincardlist";

const Winlist = () => {
  const [winConfirmList, setWinConfirmList] = useState<any>([]);
  useEffect(() => {
    const fetchList = async () => {
      const data = await myGiveawayGet();
      setWinConfirmList(data);
      console.log("data : ", data);
    };
    fetchList();
  }, []);

  return (
    <div>
      <WinCardlist winConfirmList={winConfirmList} />
    </div>
  );
};

export default Winlist;
