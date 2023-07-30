'use client'
import Image from "next/image"
import {SurveyDetailPage, BackButtonContainer, BackButton, SurveyDetailContainer, SurveyContent, SurveyTitle,
    SurveyProfile, SurveyProfileName, SurveyPurpose, SurveyInformation, SurveyInformationTitle, SurveyInformationContent,
    SurveyInformationContentHighLight, SurveyFooter, SurveyCard, SurveyCardTitle, SurveyCardContent, SurveyCardContainer, ButtonAndShare, SurveyResultContainer, 
    SurveyResultComent, SurveyProduct, HighLightFont, PercentageContainer, Percentage, PercentageCard, PercentageElement,
    Board, BoardTop, BoardTopLive, BoardTopLiveFont, BoardTopLiveCount, BoardTopLivetime, TableContainer, Table, TableHead, TableBody, TableRow, TableHeaderCell, TableDataCell, TableFont, TableNumberFont } from "./SurveyDetail.styled"
import { StyledTag } from "@/components/card/Card.styled"
import Button from '@/components/Button'
import { useEffect, useRef } from "react"


const SurveyDetail = (props:any) => {
    const tableContainerRef = useRef(null);

    useEffect(() => {
        // 컴포넌트가 마운트되면 테이블 컨테이너의 스크롤을 아래로 이동
        scrollToBottom();
    }, []);

    const scrollToBottom = () => {
        if (tableContainerRef.current) {
        const container = tableContainerRef.current as HTMLDivElement;
        // 스크롤 높이를 테이블 컨테이너 높이로 설정하여 스크롤을 아래로 이동
        container.scrollTop = container.scrollHeight;
        }
    };
  
    return (
        <SurveyDetailPage>
            <BackButtonContainer>
                <BackButton>
                    <Image src="/BackImg.png" alt="back" width={248} height={48}></Image>
                </BackButton>
            </BackButtonContainer>
            
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

            
            <SurveyResultContainer>
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
                </PercentageContainer>
                
                <Board>
                    <BoardTop>
                        <BoardTopLive>
                            <BoardTopLiveFont>
                                실시간 당첨 현황
                            </BoardTopLiveFont>
                            <BoardTopLiveCount>
                                117
                            </BoardTopLiveCount>
                        </BoardTopLive>

                        <BoardTopLivetime>
                            2023.07.23 22:39 기준
                        </BoardTopLivetime>
                        <Image src="/refresh.png" alt="refresh" width={16} height={16}></Image>
                    </BoardTop>
                    
                    <TableContainer ref={tableContainerRef}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell><TableFont>설문일시</TableFont></TableHeaderCell>
                                    <TableHeaderCell><TableFont>이름</TableFont></TableHeaderCell>
                                    <TableHeaderCell><TableFont>리워드</TableFont></TableHeaderCell>
                                    <TableHeaderCell><TableFont>당첨여부</TableFont></TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            
                            {/* 테이블 바디만 map 당첨 or 꽝 색 구분 */}
                            <TableBody>
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                                <TableRow>
                                    <TableDataCell><TableNumberFont>2023/07.23 12:59</TableNumberFont></TableDataCell>
                                    <TableDataCell><TableFont>안녕***</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>스타벅스 <TableNumberFont>10,000</TableNumberFont>원권</TableFont></TableDataCell>
                                    <TableDataCell><TableFont>당첨</TableFont></TableDataCell>
                                </TableRow>
                            
                            </TableBody>
        
                        </Table>
                    </TableContainer>
                </Board>
                
                
            </SurveyResultContainer>

        
        </SurveyDetailPage>
    )
}

export default SurveyDetail