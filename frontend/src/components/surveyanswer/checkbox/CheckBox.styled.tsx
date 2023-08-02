import styled, { css }from 'styled-components';

const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


const CheckBoxFlex = styled.div`
    display: flex;
    align-items: center;
    margin: 3px;
`

const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;

`;

const CheckBoxLabel = styled.label`
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export { CheckBoxContainer, CheckBoxFlex, CheckBoxInput, CheckBoxLabel}