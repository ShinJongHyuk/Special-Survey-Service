import styled, { css } from "styled-components";

const RadioContainer = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RadioFlex = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;

const RadioButton = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  width: 70vw;
  height: auto;
  min-height: 40px;
  word-break: break-all;
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

export { RadioContainer, RadioFlex, RadioButton };
