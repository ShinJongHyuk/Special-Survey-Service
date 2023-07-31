'use client'
import {SurveyResultComent, HighLightFont, PercentageContainer, Percentage, PercentageCard, PercentageElement} from './Result.styled'
import Image from 'next/image'
const ResultComponent = (props:any) => {
    return (
        <>
        <SurveyResultComent>
                    평균 <HighLightFont>5</HighLightFont>분만에 설문을 완료하고 총 <HighLightFont>117</HighLightFont>명이 리워드에 당첨됐어요!
                </SurveyResultComent>
                {/* <SurveyProduct> */}
                    <Image src="/surveyProduct.png" alt="product" width={150} height={150}></Image>
                {/* </SurveyProduct> */}

                <PercentageContainer>
                    <Percentage>
                        <PercentageCard>
                            <PercentageElement {...props}>0</PercentageElement>
                        </PercentageCard>
                        <PercentageCard>
                            <PercentageElement {...props}>9</PercentageElement>
                        </PercentageCard>
                        <PercentageCard>
                            <PercentageElement {...props}>8</PercentageElement>
                        </PercentageCard>
                        
                            <PercentageElement {...props}>%</PercentageElement>
                        
                    </Percentage>

                    <Image src="/woman.png" alt="woman" width={350} height={307}></Image>
                </PercentageContainer></>
    )
}

export default ResultComponent