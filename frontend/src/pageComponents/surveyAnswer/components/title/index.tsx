`use client`
import { StyledTag } from '@/components/card/Card.styled'
import Image from 'next/image'
import { SurveyAnswerTitleContainer, SurveyAnswerTitleInnerContainer, SurveyAnswerTitle, SurveyAnswercontent } from './Title.styled'
import { useEffect } from 'react'
import moment from "moment";
const Titlecomponent = (props:any) => {
    let typeName = "일반";

    if (props.type === "INSTANT_WIN") {
      typeName = "즉시당첨";
    } else if (props.type === "NORMAL") {
      const now = moment();
      const endTime = moment(props.endTime, "YYYY-MM-DD-HH-mm");
      const diffHours = endTime.diff(now, "hours");
  
      if (diffHours < 24) {
        typeName = "타임어택";
      }
    }
    return (
        <SurveyAnswerTitleContainer>
            <SurveyAnswerTitleInnerContainer>
                <StyledTag {...props}>
                    {props.type === "NORMAL" ? (
                        <Image src="/card/whatshot.svg" priority={true} width={11} height={17} alt="whatshot" />
                    ) : (
                        <Image src="/card/bolt.svg" priority={true} width={11} height={17} alt="abc" />
                    )}
                    <div className="type-text">{typeName}</div>
                </StyledTag>
                <SurveyAnswerTitle>{props.title}</SurveyAnswerTitle>
                <SurveyAnswercontent>{props.content}</SurveyAnswercontent>
            </SurveyAnswerTitleInnerContainer>
        </SurveyAnswerTitleContainer>
    )
}

export default Titlecomponent