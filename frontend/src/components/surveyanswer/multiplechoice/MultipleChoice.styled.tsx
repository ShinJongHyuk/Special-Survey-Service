import styled, { css }from 'styled-components';

const RadioContainer = styled.div.attrs<any>((props) => ({
  disabled : props.disabled || false
}))`
  display: flex;
  flex-direction: column;
  ${(props) => props.disabled && css`
    opacity: 0.5;
    pointer-events: none; 

  `}
`;


const RadioFlex = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
  margin: 3px;
`

const RadioInput = styled.input.attrs<any>((props) => ({
  type: "radio"
}))`
  position: relative; /* Add this */
  margin-right: 8px;
  width: 16px;
  height: 16px;
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 50%;
  outline: none;
  transition: border-color 0.3s;
  z-index: 0;
  &:hover {
    border-color: ${(props) => props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange};
  }

  &:checked {
    border-color: ${(props) => props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange};
    background-color: white;

    &:after {
      content: "";
      position: absolute;
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%);
      width: 8px; 
      height: 8px;
      border-radius: 50%;
      background-color: ${(props) => props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange};
    }
  }
`;

const RadioLabel = styled.label`
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: #6D7075;
  
`;

const LinkSign = styled.div`
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: #6D7075;
  margin-left: 20px;
`

export { RadioContainer, RadioInput, RadioLabel, RadioFlex, LinkSign}