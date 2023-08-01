'use client'

import { StyledTag } from "@/components/card/Card.styled"
import { Survey_Title_Container, Title_Content, Title_Inner_Container, Title_input } from "../makesurvey/Makesurvey.styled"
import { BackButton, BackButtonContainer } from "../surveydetail/SurveyDetail.styled"
import Image from "next/image"
import { SurveyAnswerPage, SurveyAnswerTitleContainer, SurveyAnswerTitleInnerContainer,
     SurveyAnswerTitle, ProgressContainer, ProgressBar, ProgressBarPercentage, Survey_Container } from "./SurveyAnswer.styled"
const SurveyAnswer = (props:any) => {
    return (
        <SurveyAnswerPage>
            <BackButtonContainer bgcolor="white">
                <BackButton>
                <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48}></Image>
                </BackButton>
            </BackButtonContainer>

            <SurveyAnswerTitleContainer>
                <SurveyAnswerTitleInnerContainer>
                    <StyledTag {...props}>
                        {props.type === "타임어택" ? (
                            <Image src="/card/whatshot.svg" priority={true} width={11} height={17} alt="whatshot" />
                        ) : (
                            <Image src="/card/bolt.svg" priority={true} width={11} height={17} alt="abc" />
                        )}
                        <div className="type-text">{props.type}</div>
                    </StyledTag>
                    <SurveyAnswerTitle>프로그래밍 언어 선호도</SurveyAnswerTitle>
                </SurveyAnswerTitleInnerContainer>
            </SurveyAnswerTitleContainer>
            
            <ProgressContainer>
                <ProgressBar width="50%"></ProgressBar>
                <ProgressBarPercentage>50%</ProgressBarPercentage>
            </ProgressContainer>

            
            <Survey_Container>
                <Survey_Title_Container>
                </Survey_Title_Container>
            </Survey_Container>
        </SurveyAnswerPage>
    )
}

export default SurveyAnswer