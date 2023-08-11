"use client";
import Image from "next/image";
import { SurveycardType } from "./Surveycard.type";
import { StyledCard, StyledCardRight, StyledCardHeader, StyledRemainTime, StyledImg, StyledProbability } from "./Surveycard.styled";
import moment from "moment";

const Surveycard = (props: SurveycardType) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];

  // 일반, 타임어택, 즉시당첨 구분 => typeName
  let typeName = "일반";
  if (props.type === "INSTANT_WIN") {
    typeName = "즉시당첨";
  } else if (props.type === "NORMAL") {
    const now = moment();
    const endTime = moment(props.endtime, "YYYY-MM-DD-HH-mm");
    const diffHours = endTime.diff(now, "hours");

    if (diffHours < 24) {
      typeName = "타임어택";
    }
  }

  // 남은 시간 format 설정
  const [unit1, unit2] = props.remaintime ? props.remaintime.split(", ") : ["00분", "00초"];
  const [value1, label1] = unit1.split(":");
  const [value2, label2] = unit2.split(":");

  const value = parseFloat(props.probability);
  const formattedProbability = value % 1 === 0 ? Math.round(value) + "%" : value.toFixed(1) + "%";

  const newProps = { ...props, typename: typeName };

  return (
    <StyledCard {...newProps}>
      <StyledImg src={imgsrc} {...newProps} />
      <StyledCardRight>
        <StyledCardHeader {...newProps}>
          <div className="titletext">{props.title}</div>
          <div className="writer" {...props}>
            {props.nickname}
          </div>
        </StyledCardHeader>

        <StyledRemainTime {...props}>
          <Image src="/card/yellowblackclock.svg" priority={true} width={20} height={20} alt="remaintime" />
          <div className="time-text">
            <div style={{ width: "110px", display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <span>{value1}</span>
                <span>{label1}</span>
              </div>
              <div>
                <span>{value2}</span>
                <span>{label2}</span>
              </div>
            </div>
          </div>
          <div className="text">남음</div>
        </StyledRemainTime>

        <StyledProbability {...newProps}>
          {props.type === "NORMAL" ? (
            <Image src="/card/percent.svg" priority={true} width={22} height={22} alt="remaintime" />
          ) : (
            <Image src="/card/orangepercent.svg" priority={true} width={22} height={22} alt="remaintime" />
          )}
          {props.contentype === "speedy" ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="color" {...newProps}>
                {props.responsedtime}
              </div>
              <div className="speedy"> 소요 </div>
            </div>
          ) : (
            <div className="color" {...newProps}>
              {formattedProbability}
            </div>
          )}
        </StyledProbability>
      </StyledCardRight>
    </StyledCard>
  );
};

export default Surveycard;
