import Card from "@/components/card";
import React from "react";
import { StyledList } from "./Cardlist.styled";
import useNormalListHook from "@/Hooks/listpage/useNormalListHook";
import NormalCard from "./normalCard";

const NormalCardlist = () => {
  const { sortedSurveys } = useNormalListHook();

  return (
    <StyledList>
      {sortedSurveys.map((survey: any, index: any) => (
        <NormalCard key={index} survey={survey} />
      ))}
    </StyledList>
  );
};

export default NormalCardlist;
