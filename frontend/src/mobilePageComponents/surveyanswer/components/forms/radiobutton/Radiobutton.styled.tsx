import styled, { css } from "styled-components";

const RadioContainer = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RadioFlex = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
  margin: 3px;
`;

const RadioLabel = styled.label<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 40px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => (props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange)};
  border-radius: 4px;
  cursor: pointer;
  transition:
    border-color 0.3s,
    background-color 0.3s;

  &:hover {
    border-color: ${(props) => (props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange)};
  }
`;

const RadioInput = styled.input.attrs<any>((props) => ({
  type: "radio",
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + ${RadioLabel} {
    border-color: ${(props) => (props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange)};
    background-color: ${(props) => (props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange)};
    color: ${(props) => props.theme.colors.white};
  }
`;

export { RadioContainer, RadioInput, RadioLabel, RadioFlex };
