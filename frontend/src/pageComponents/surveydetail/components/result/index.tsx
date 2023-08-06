"use client";
import { SurveyResultComent, StyledImg, HighLightFont, PercentageContainer, Percentage, PercentageCard, PercentageElement } from "./Result.styled";
import Image from "next/image";

const ResultComponent = (props: any) => {
  const images: { [key: string]: string } = {
    BBQ후라이드치킨: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  //   const imgsrc = images[props.giveawaynames[0]];
  //   console.log(imgsrc);
  return (
    <>
      <SurveyResultComent>
        {props.type === "NORMAL" ? (
          <div>
            총 <span className="purple">{props.headcount}</span>명이 응답했어요!
          </div>
        ) : (
          <div>
            총 <span className="orange">{props.headcount}</span>명이 리워드에 당첨됐어요!
          </div>
        )}
      </SurveyResultComent>

      {/* <SurveyProduct> */}
      {/* <div style={{ width: "80px", height: "80px" }}>
        <StyledImg src={imgsrc} />
      </div> */}
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

        <Image src="/surveyDetail/woman.png" alt="woman" width={350} height={307}></Image>
      </PercentageContainer>
    </>
  );
};

export default ResultComponent;
