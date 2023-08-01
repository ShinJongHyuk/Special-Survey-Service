"use client";
import React from "react";
import { StyledInstantNavLink, StyledTimeattackNavLink } from "../Navbar.styled";
import { usePathname } from "next/navigation";

const SurveylistComponent = (props: any) => {
  const pathname = props.pathname;

  return (
    <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "30px" }}>
      <StyledTimeattackNavLink href="/normalSurveyList" pathname={pathname}>
        일  반
      </StyledTimeattackNavLink>
      <StyledInstantNavLink href="/instantWinSurveyList" pathname={pathname}>
        즉시당첨
      </StyledInstantNavLink>
    </div>
  );
};

export default SurveylistComponent;
