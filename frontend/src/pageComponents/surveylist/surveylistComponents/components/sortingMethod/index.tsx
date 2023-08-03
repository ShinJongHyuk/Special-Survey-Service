import React from 'react'
import { StyledSortingMethodList } from "./SortingMethod.styled"
import Button from '@/components/button';
import { useSortTypeStore } from '@/stores/surveylist/useSortTypeStore';

const SortingMethod = (props: any) => {

    const path = props.selectBtn;
    const { setSortType } = useSortTypeStore();

    const buttonUse = path === "1" ? "sortingPurple" : "sortingYellow";

    return (
        <>
            <StyledSortingMethodList path={path}>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/card/bolt.svg" use={buttonUse} label="추천순" onClick={() => setSortType("recommend")}></Button>
                </div>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/card/bolt.svg" use={buttonUse} label="확률순" onClick={() => setSortType("percent")}></Button>
                </div>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/card/bolt.svg" use={buttonUse} label="마감순" onClick={() => setSortType("deadLine")}></Button>
                </div>
            </StyledSortingMethodList>
        </>
    )
}

export default SortingMethod