import Mobiletitle from "@/mobileComponents/mobiletitle";
import { useState } from "react";
import { StyledTabContainer, StyledTab } from "./Tabmenu.styled";
import { TabType } from "./tabmenu.type";

const Tabmenu = ({ onTabSelect }: any) => {
  const [activeTab, setActiveTab] = useState<TabType>("SURVEY");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    onTabSelect(tab);
  };

  return (
    <div>
      <StyledTabContainer>
        <StyledTab active={activeTab === "SURVEY"} onClick={() => handleTabClick("SURVEY")}>
          응답한 설문
        </StyledTab>
        <StyledTab active={activeTab === "PRIZE"} onClick={() => handleTabClick("PRIZE")}>
          당첨된 상품
        </StyledTab>
      </StyledTabContainer>
    </div>
  );
};

export default Tabmenu;
