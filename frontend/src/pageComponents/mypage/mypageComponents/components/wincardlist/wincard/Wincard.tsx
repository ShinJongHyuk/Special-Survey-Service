import { StyledCard, StyledCardHeader, StyledImg, StyledText } from "./Wincard.styled";
import { WincardType } from "./Wincard.type";

const Wincard = (props: WincardType) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };

  const formatDate = (datetime: string) => {
    const date = new Date(datetime);
    // return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const imgsrc = images[props.giveawaytype];
  return (
    <StyledCard {...props}>
      <StyledCardHeader {...props}>
        <div className="title-text">{props.surveytitle}</div>
        <div className="writer" {...props}>
          {props.surveywriter}
        </div>
      </StyledCardHeader>
      {props.usercheck === "true" && <StyledImg src={imgsrc} />}

      <StyledText>
        {props.usercheck === "true" && (
          <div className="date">
            <div> 응답일 </div>
            <div>{formatDate(props.answerdatetime) || "응답 날짜"}</div>
          </div>
        )}
        {props.usercheck !== "true" && <div className="confirm">당첨 확인하기</div>}
      </StyledText>
    </StyledCard>
  );
};

export default Wincard;
