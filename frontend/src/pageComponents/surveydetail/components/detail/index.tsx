'use client'
 import { SurveyDetailContainer, SurveyContent, SurveyTitle,
    SurveyProfile, SurveyProfileName, SurveyPurpose, SurveyInformation, SurveyInformationTitle, SurveyInformationContent,
    SurveyInformationContentHighLight, SurveyFooter, SurveyCard, SurveyCardTitle, SurveyCardContent, SurveyCardContainer, ButtonAndShare }
    from './Detail.styled'
import Image from 'next/image'
import Button from '@/components/Button'
import { StyledTag } from "@/components/card/Card.styled"
const DetailComponent = (props:any) => {
    return (
        <SurveyDetailContainer>
                    <Image src="/SurveyDetailTest.png" alt="s" width={600} height={700}></Image>

                    <SurveyContent>
                        <div>
                            <div style={{width:"82px", marginTop:"20px"}}>
                            <StyledTag {...props}>
                                {props.type === "타임어택" ? (
                                <Image src="/whatshot.svg" priority={true} width={11} height={17} alt="whatshot" />
                                ) : (
                                <Image src="/bolt.svg" priority={true} width={11} height={17} alt="abc" />
                                )}
                                <div className="type-text">{props.type}</div>
                            </StyledTag>
                            </div>
                            
                            <SurveyTitle>
                                {props.title}
                                프로그래밍 언어 선호도
                            </SurveyTitle>
                            
                            <SurveyProfile>
                                <Image src="/womanprofle.svg" width={32} height={32} alt="profile"></Image>
                                <SurveyProfileName>
                                    내가그린기린그림 3일전
                                </SurveyProfileName>
                            </SurveyProfile>            
                            
                            <SurveyPurpose>
                                한국에서 어떤 프로그래밍 언어를 선호하는지 조사하고 싶습니다.
                                많은 관심과 참여 부탁드립니다.
                            </SurveyPurpose>
                        </div>

                        <div style={{width:"600px"}}>
                            <SurveyInformation>
                                <Image src="/agency.svg" alt="agency" width={40} height={17.8}></Image>
                                <SurveyInformationTitle>설문 기관</SurveyInformationTitle>
                                <SurveyInformationContent>(주) 얼라이언스</SurveyInformationContent>
                            </SurveyInformation>

                            <SurveyInformation>
                                <Image src="/period.svg" alt="period" width={40} height={17.8}></Image>
                                <SurveyInformationTitle>설문 기간</SurveyInformationTitle>
                                <SurveyInformationContent>2023년 7월 19일부터 2023년 7월 30일까지</SurveyInformationContent>
                            </SurveyInformation>

                            <SurveyInformation>
                                <Image src="/reword.svg" alt="reword" width={40} height={17.8}></Image>
                                <SurveyInformationTitle>리워드</SurveyInformationTitle>
                                <SurveyInformationContent>스타벅스 10,000원권</SurveyInformationContent>
                            </SurveyInformation>

                            <SurveyInformation>
                                <Image src="/res.svg" alt="rse" width={40} height={17.8}></Image>
                                <SurveyInformationTitle>응답수</SurveyInformationTitle>
                                <SurveyInformationContent>209/300</SurveyInformationContent>
                            </SurveyInformation>
                        </div>

                        <SurveyFooter>
                            <SurveyCardContainer>
                            <SurveyCard>
                                <SurveyCardTitle>
                                    문항수
                                </SurveyCardTitle>
                                <SurveyCardContent>
                                    10개
                                </SurveyCardContent>
                            </SurveyCard>

                            <SurveyCard>
                                <SurveyCardTitle>
                                    예상 소요시간
                                </SurveyCardTitle>
                                <SurveyCardContent>
                                    5분
                                </SurveyCardContent>
                                
                            </SurveyCard>
                               
                            <SurveyCard>
                                <SurveyCardTitle>
                                    남은 시간
                                </SurveyCardTitle>
                                <SurveyCardContent>
                                    00:59:10
                                </SurveyCardContent>
                            </SurveyCard>
                            </SurveyCardContainer>
                            <ButtonAndShare>
                                <Image src="/shareIcon.png" alt="share" width={64} height={64}></Image>
                                <Button use="SignUpLogin" label="지금 응답하기"></Button>
                            </ButtonAndShare>
                        </SurveyFooter>
                    </SurveyContent>
            </SurveyDetailContainer>
    )
}

export default DetailComponent