import React, { useEffect, useState } from "react";
import { StyledSortingMethodList } from "./SortingMethod.styled";
import Button from "@/components/button";
import { useSortTypeStore } from "@/stores/surveylist/useSortTypeStore";

const buttonType = [
  {
    label: "추천순",
    type: "recommend",
  },
  {
    label: "확률순",
    type: "percent",
  },
  {
    label: "마감순",
    type: "deadLine",
  },
];
const SortingMethod = (props: any) => {
  const path = props.selectBtn;
  const { sortType, setSortType } = useSortTypeStore();
  const [buttonUse, setButtonUser] = useState(path === "1" ? "sortingPurple" : "sortingYellow");
  useEffect(() => {
    setButtonUser(path === "1" ? "sortingPurple" : "sortingYellow");
    setSortType("recommend");
  }, [props.selectBtn]);

  return (
    <>
      <StyledSortingMethodList path={path}>
        {buttonType.map(({ label, type }, index) => {
          const isClick = sortType == type ? "Click" : "";
          return (
            <div key={index} style={{ width: "130px", height: "36px" }}>
              <Button icon="/card/bolt.svg" use={buttonUse + isClick} label={label} onClick={() => setSortType(type)}></Button>
            </div>
          );
        })}
      </StyledSortingMethodList>
    </>
  );
};

export default SortingMethod;
