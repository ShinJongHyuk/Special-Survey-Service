import { StyledCard, StyledCardHeader, StyledImg, StyledText } from "./Wincard.styled";
import { WincardType } from "./Wincard.type";

const Wincard = (props: WincardType) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };

  const imgsrc = images[props.giveawaytype];
  return (
    <StyledCard {...props}>
      <StyledCardHeader {...props}>
        <div className="title">{props.surveytitle}</div>
        <div className="writer" {...props}>
          {props.surveywriter}
        </div>
      </StyledCardHeader>
      {props.usercheck === "true" && <StyledImg src={imgsrc} />}

      <StyledText>
        {props.usercheck === "true" && (
          <div className="date">
            <div> 응답일 </div>
            <div>{props.answerdatetime || "응답날짜"}</div>
          </div>
        )}
        {props.usercheck !== "true" && <div className="confirm">당첨 확인하기</div>}
      </StyledText>
    </StyledCard>
  );
};

export default Wincard;
