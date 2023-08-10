"use client";
import styled, { css } from "styled-components";
import { SurveycardType } from "./Surveycard.type";

const StyledCard = styled.div.attrs<SurveycardType>((props) => ({}))`
  ${(props) => {
    const bgcolor = props.theme.colors.white;
    const purple = props.theme.colors.purple;
    const lightgray = props.theme.colors.lightgray;
    const bcolor = props.typename === "NORMAL" ? purple : lightgray;

    return css`
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      border-radius: 13px;
      border: 1px solid ${bcolor};
      background-color: ${bgcolor};

      cursor: pointer;
    `;
  }};
`;

const StyledCardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;
const StyledCardHeader = styled.div.attrs<SurveycardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemiBold;
    const black = props.theme.colors.black;
    const gray = props.theme.colors.gray;

    const small = props.theme.fontSizes.small;
    const xsmall = props.theme.fontSizes.xsmall;

    return css`
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-family: ${font};

      width: 100%;
      align-items: flex-start;

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

const StyledProbability = styled.div.attrs<SurveycardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.EnglishFontBold;
    const medium = props.theme.fontSizes.medium;
    const purple = props.theme.colors.purple;
    const orange = props.theme.colors.orange;
    const black = props.theme.colors.black;
    const color = props.typename === "NORMAL" ? purple : orange;
    const font2 = props.theme.fonts.HangeulFontSemiBold;
    const xsmall = props.theme.fontSizes.xsmall;

    return css`
      display: flex;
      align-items: center;
      gap: 6px;

      .text {
        font-family: ${font};
        font-size: ${medium};
        color: ${color};
      }

      .speedy {
        padding-left: 4px;
        font-family: ${font2};
        font-size: ${xsmall};
        color: ${black};
      }
    `;
  }};
`;

const StyledRemainTime = styled.div.attrs<SurveycardType>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const font1 = props.theme.fonts.EnglishFontBold;
    const font2 = props.theme.fonts.HangeulFontSemiBold;
    const xsmall = props.theme.fontSizes.xsmall;
    const medium = props.theme.fontSizes.medium;

    return css`
      display: flex;
      align-items: center;
      gap: 6px;
      /* width: 100%; */

      color: ${black};

      .time-text {
        display: flex;
        align-items: center;
        font-family: ${font1};
        font-size: ${medium};
      }
      .text {
        padding-left: 2px;
        font-family: ${font2};
        font-size: ${xsmall};
      }
    `;
  }};
`;

const StyledImg = styled.img.attrs<any>((props) => ({}))`
  ${(props) => {
    const purple = props.theme.colors.purple;
    const yellow = props.theme.colors.yellow;
    const color = props.typename === "NORMAL" ? purple : yellow;
    return css`
      border: 2.5px dashed ${color};
      border-radius: 58px;
      width: 92px;
    `;
  }};
`;

export { StyledCard, StyledCardRight, StyledRemainTime, StyledImg, StyledProbability, StyledCardHeader };
