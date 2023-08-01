
import styled, { css } from "styled-components";


const StyledList = styled.div`
  display: grid;
  padding: 30px 100px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  justify-content: start;
  grid-gap: 2rem;
`
const StyledSortingMethodList = styled.div`
  display: flex;
  width: 100%;
  padding: 18px;
  justify-content: center;
  align-items: center;
  gap: 65px;
`

const StyledHoverMsg = styled.div`
  position: absolute;
  bottom: 65px;
  right: 5px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 7px;
  padding: 10px;
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  z-index: 1;
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
  font-size: ${(props) => props.theme.fontSizes.xsmall};

  width: 80px;
`

const StyledPlusBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.purple};
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
`;
export { StyledList, StyledSortingMethodList, StyledHoverMsg, StyledPlusBtn }