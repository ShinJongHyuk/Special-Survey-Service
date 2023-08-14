import Mobiletitle from "@/mobileComponents/mobiletitle";
import Tabmenu from "@/mobileComponents/tabmenu";
import { TabType } from "@/mobileComponents/tabmenu/tabmenu.type";
import { useState } from "react";
import useAnsweredListHook from "@/Hooks/mypage/useAnsweredListHook";
import Cardlist from "@/mobileComponents/cardlist";
import useWinListHook from "@/Hooks/mypage/useWinListHook";
import { StyledText } from "./Mypage.styled";

const MobileMypage = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("SURVEY");
  const { surveys } = useAnsweredListHook();
  const { winConfirmList, refreshList } = useWinListHook();

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
        <div style={{ paddingTop: "410px", display: "flex", justifyContent: "center" }}>
          <StyledText>당첨된 상품 목록은 컴퓨터로 확인해주세요! </StyledText>
        </div>
      )}
    </div>
  );
};

export default MobileMypage;
