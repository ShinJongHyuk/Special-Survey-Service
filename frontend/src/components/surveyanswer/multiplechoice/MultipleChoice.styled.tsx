import styled, { css }from 'styled-components';

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const RadioFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 3px;
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
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

export { RadioContainer, RadioInput, RadioLabel, RadioFlex}