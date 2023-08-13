import styled, { css } from "styled-components";

const ShortInput = styled.textarea.attrs<any>((props) => ({
  placeholder: props.placeholder,
  disabled: props.disabled || false,
}))`
  ${(props) => {
    const color = props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange;

    return css`
      display: flex;
      padding: 10px 15px;
      /* border: hidden; */
      border: 1px solid ${color};
      border-radius: 16px;
      background: #f7f8fb;
      font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
      font-size: ${(props) => props.theme.fontSizes.xsmall};
      height: ${props.value ? "auto" : "40px"};
      &:focus {
        outline: none;
        border: 2px solid ${color};
      }

      /* &::placeholder {
        color: #96989c;
      } */
    `;
  }}
`;
export { ShortInput };
