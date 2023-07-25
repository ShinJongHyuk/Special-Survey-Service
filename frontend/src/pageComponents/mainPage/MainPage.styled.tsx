import styled from "styled-components";

const StyledTextbox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  position: "absolute";
  top: "50%";
  left: "50%";
  transform: "translate(-50%, -50%)";
  z-index: 1;
`;

export { StyledTextbox };
