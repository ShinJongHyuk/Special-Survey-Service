import styled, { css } from "styled-components";

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBoxFlex = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const CheckboxButton = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  width: 70vw;
  height: auto;
  min-height: 40px;
  word-break: break-all;
  /* overflow-wrap: break-word; */
  white-space: pre-wrap;
  background-color: ${(props) =>
    props.selected ? (props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange) : props.theme.colors.white};
  color: ${(props) => (props.selected ? props.theme.colors.white : "inherit")};
  border: 1px solid ${(props) => (props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange)};
  border-radius: 16px;
  cursor: pointer;

  transition:
    border-color 0.3s,
    background-color 0.3s;
`;

const StyledCheckboxNotice = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const color = props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange;

    return css`
      text-align: right;
      color: ${color};
      font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
      font-size: ${(props) => props.theme.fontSizes.xsmall};
    `;
  }};
`;
export { StyledCheckboxNotice, CheckboxButton, CheckBoxContainer, CheckBoxFlex };
