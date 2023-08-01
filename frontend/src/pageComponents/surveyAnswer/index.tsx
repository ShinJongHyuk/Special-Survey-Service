'use client'

import { Survey_Container, Survey_Title_Container, Title_Content, Title_Inner_Container, Title_input } from "../makesurvey/Makesurvey.styled"
import { BackButton, BackButtonContainer } from "../surveydetail/SurveyDetail.styled"
import Image from "next/image"
const SurveyAnswer = (props:any) => {
    return (
        <div>
            <BackButtonContainer bgcolor="white">
                <BackButton>
                <Image src="/surveyDetail/BackImg.png" alt="back" width={248} height={48}></Image>
                </BackButton>
            </BackButtonContainer>

            <StyledTag {...props}>
            {props.type === "NORMAL" ? (
            <Image src="/card/whatshot.svg" priority={true} width={11} height={11} alt="whatshot" />
            ) : (
            <Image src="/card/bolt.svg" priority={true} width={11} height={11} alt="abc" />
            )}
            <div className="type-text">{props.type}</div>
        </StyledTag>

            
            {/* <Survey_Container>
                <Survey_Title_Container>
                </Survey_Title_Container>
            </Survey_Container> */}
        </div>
    )
}

export default SurveyAnswer