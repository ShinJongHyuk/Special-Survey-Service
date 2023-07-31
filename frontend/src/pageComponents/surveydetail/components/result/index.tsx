'use client'
import {SurveyResultComent, HighLightFont, PercentageContainer, Percentage, PercentageCard, PercentageElement} from './Result.styled'
import Image from 'next/image'
const ResultComponent = () => {
    return (
        <>
        <SurveyResultComent>
                    평균 <HighLightFont>5</HighLightFont>분만에 설문을 완료하고 총 <HighLightFont>117</HighLightFont>명이 리워드에 당첨됐어요!
                </SurveyResultComent>
                {/* <SurveyProduct> */}
                    <Image src="/surveyProduct.png" alt="product" width={200} height={200}></Image>
                {/* </SurveyProduct> */}

                <PercentageContainer>
                    <Percentage>
                        <PercentageCard>
                            <PercentageElement>0</PercentageElement>
                        </PercentageCard>
                        <PercentageCard>
                            <PercentageElement>9</PercentageElement>
                        </PercentageCard>
                        <PercentageCard>
                            <PercentageElement>8</PercentageElement>
                        </PercentageCard>
                        
                            <PercentageElement>%</PercentageElement>
                        
                    </Percentage>

                    <Image src="/woman.png" alt="woman" width={416} height={366}></Image>
                </PercentageContainer></>
    )
}

export default ResultComponent