`use client`
import { StyledTag } from '@/components/card/Card.styled'
import Image from 'next/image'
import { SurveyAnswerTitleContainer, SurveyAnswerTitleInnerContainer, SurveyAnswerTitle } from './Title.styled'
const Titlecomponent = (props:any) => {
    return (
        <SurveyAnswerTitleContainer>
            <SurveyAnswerTitleInnerContainer>
                <StyledTag {...props}>
                    {props.type === "NORMAL" ? (
                        <Image src="/card/whatshot.svg" priority={true} width={11} height={17} alt="whatshot" />
                    ) : (
                        <Image src="/card/bolt.svg" priority={true} width={11} height={17} alt="abc" />
                    )}
                    <div className="type-text">{props.type === "NORMAL"? "타임어택" : "즉시당첨"}</div>
                </StyledTag>
                <SurveyAnswerTitle>{props.title}</SurveyAnswerTitle>
            </SurveyAnswerTitleInnerContainer>
        </SurveyAnswerTitleContainer>
    )
}

export default Titlecomponent