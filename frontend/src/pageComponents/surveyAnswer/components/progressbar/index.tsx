'use client'
import { useState } from 'react'
import { ProgressContainer, ProgressBar, ProgressBarPercentage } from './ProgressBar.styeld'
const ProgressBarComponent = () => {
    const [percentage, setPercentage] = useState("100%")

    const onClick = () => {
        if (percentage === "100%") {
            console.log("100%")
        }
    }
    return (
        <ProgressContainer>
                <ProgressBar type="즉시당첨" width={percentage} onClick={onClick}></ProgressBar>
                <ProgressBarPercentage width={percentage}>{percentage}</ProgressBarPercentage>
        </ProgressContainer>
    )
}

export default ProgressBarComponent