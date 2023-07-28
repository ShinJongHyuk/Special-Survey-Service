import Button from '@/components/button';
import React from 'react'
import Image from "next/image";
import { StyledList } from './SortingMethodList.styled';

const SortingMethodList = () => {
    return (
        <StyledList>
            <div style={{ width: "130px", height: "36px" }}>
                <Button icon="/bolt.svg" use="sortingYellow" label="추천순"></Button>
            </div>
            <div style={{ width: "130px", height: "36px" }}>
                <Button icon="/bolt.svg" use="sortingYellow" label="확률순"></Button>
            </div>
            <div style={{ width: "130px", height: "36px" }}>
                <Button icon="/bolt.svg" use="sortingYellow" label="마감순"></Button>
            </div>
        </StyledList>
    )
}

export default SortingMethodList;