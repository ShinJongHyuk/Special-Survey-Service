'use client'
import { useState } from 'react'
import { ProgressContainer, ProgressBar, ProgressBarPercentage } from './ProgressBar.styeld'
const ProgressBarComponent = (props:any) => {
    const percentage = props.headCount && (props.headCount/props.closedHeadCount) * 100


    const onClick = () => {
        if (percentage === 100) {
            console.log("100%")
            // 제출 api만들기
        }
    }
    return (
        <ProgressContainer>
                <ProgressBar type={props.type} width={percentage} onClick={onClick}></ProgressBar>
                <ProgressBarPercentage width={percentage}>{percentage === 100 ? "제출" : `${percentage}%`}</ProgressBarPercentage>
        </ProgressContainer>
    )
}

export default ProgressBarComponent