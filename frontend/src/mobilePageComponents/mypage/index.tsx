import Mobiletitle from "@/mobileComponents/mobiletitle";
import Tabmenu from "@/mobileComponents/tabmenu";
import { TabType } from "@/mobileComponents/tabmenu/tabmenu.type";
import { useState } from "react";
import useAnsweredListHook from "@/Hooks/mypage/useAnsweredListHook";
import Cardlist from "@/mobileComponents/cardlist";

const MobileMypage = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("SURVEY");
  const { surveys } = useAnsweredListHook();

  return (
    <div>
      <div style={{ position: "fixed", width: "100%", zIndex: "0", background: "white" }}>
        <Mobiletitle text="My Page" />
        <Tabmenu onTabSelect={(tab: any) => setSelectedTab(tab)} />
      </div>
      {selectedTab === "SURVEY" && (
        <div style={{ paddingTop: "210px" }}>
          <Cardlist cards={surveys} contentType="mypage"></Cardlist>
        </div>
      )}
      {selectedTab === "PRIZE" && (
        <div style={{ paddingTop: "210px" }}>
          <div>PRIZE </div>
        </div>
      )}
    </div>
  );
};

export default MobileMypage;
