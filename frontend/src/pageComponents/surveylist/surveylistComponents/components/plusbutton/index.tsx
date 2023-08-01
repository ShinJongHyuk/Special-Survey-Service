import { useState } from "react";
import { useRouter } from "next/navigation";
import { StyledHoverMsg, StyledPlusBtn } from "./Plustbutton.styled";

const Plusbutton = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const goMakeSurvey = () => {
    router.push("/makesurvey");
  };
  return (
    <div
      style={{ position: "fixed", bottom: "21px", right: "30px", cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledPlusBtn onClick={goMakeSurvey} {...props}>
        +
      </StyledPlusBtn>
      {isHovered && <StyledHoverMsg>설문지 생성 </StyledHoverMsg>}
    </div>
  );
};

export default Plusbutton;
