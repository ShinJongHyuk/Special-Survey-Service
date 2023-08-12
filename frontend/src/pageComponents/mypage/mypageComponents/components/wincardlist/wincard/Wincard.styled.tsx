"use client";
import styled, { css } from "styled-components";
import { WincardType } from "./Wincard.type";

const StyledCard = styled.div.attrs<WincardType>((props) => ({}))`
  ${(props) => {
    const white = props.theme.colors.white;
    const gray = props.theme.colors.lightgray;
    const bgcolor = props.usercheck === "true" ? white : gray;

    return css`
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      border-radius: 16px;
      border: 1px solid #e4e7ec;
      background-color: ${bgcolor};

      padding: 30px;
      &:active {
        margin-top: 3px;
        margin-left: 3px;
      }
      cursor: pointer;
    `;
  }};
`;

const StyledCardHeader = styled.div.attrs<WincardType>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const gray = props.theme.colors.gray;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const small = props.theme.fontSizes.small;
    const xsmall = props.theme.fontSizes.xsmall;
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      font-family: ${font};

      width: 100%;
      text-align: center;

      .title {
        font-size: ${small};
        color: ${black};
      }

      .writer {
        font-size: ${xsmall};
        color: ${gray};
      }
    `;
  }};
`;

const StyledImg = styled.img.attrs<any>((props) => ({}))`
  ${(props) => {
    const color = props.theme.colors.purple;

    return css`
      border: 2.5px dashed ${color};
      border-radius: 100px;
      width: 120px;
    `;
  }};
`;
const StyledText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const purple = props.theme.colors.purple;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const small = props.theme.fontSizes.small;
    const xsmall = props.theme.fontSizes.xsmall;

    return css`
      font-family: ${font};
      .date {
        color: ${black};
        font-size: ${xsmall};
        display: flex;
        justify-content: space-between;
        width: 140px;
      }
      .confirm {
        color: ${purple};
        font-size: ${small};
      }
    `;
  }};
`;

export { StyledCard, StyledCardHeader, StyledImg, StyledText };
