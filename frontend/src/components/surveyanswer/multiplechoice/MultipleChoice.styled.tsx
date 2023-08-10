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
  type:"radio"
}))`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  &:checked {
    background-color: black;
  }
  &:checked + label{
    color : black;
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