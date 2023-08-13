import styled, { css }from 'styled-components';

const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


const CheckBoxFlex = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: center;
    margin: 5px;
`

const CheckBoxInput = styled.input.attrs<any>((props) =>({
  type: "checkbox",
  disabled : props.disabled
}))`
  position: relative;
  margin-right: 8px;
  min-width: 16px;
  min-height: 16px;
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid #ccc;
  cursor: pointer;

  &:checked {
    background-color: ${(props) => props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange};;
  }

  &:checked::before {
    content: "\\2714"; 
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    font-size: 14px;
    color: white;
  }
`;


const CheckBoxLabel = styled.label`
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color : #6D7075;

`;

export { CheckBoxContainer, CheckBoxFlex, CheckBoxInput, CheckBoxLabel}