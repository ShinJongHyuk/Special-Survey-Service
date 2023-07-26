"use client";
import styled, { css } from "styled-components";
import { CardType } from "./Card.type";

const StyledCard = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    let bgcolor;
    if (props.type === "타임어택") {
      bgcolor = props.theme.colors.purple;
    } else {
      const probability = parseInt(props.probability, 10);
      bgcolor = probability <= 40 ? props.theme.colors.yellow : props.theme.colors.white;
    }

    return css`
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;

      border-radius: 16px;
      border: 1px solid #e4e7ec;
      background-color: ${bgcolor};

      padding: 30px;
    `;
  }};
`;

const StyledTag = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const type = props.type;

    const lightpurple = "linear-gradient(0deg, rgba(168, 140, 255, 0.2) 0%, rgba(168, 140, 255, 0.2) 100%), #fff";
    const lightyellow = "linear-gradient(0deg, rgba(255, 241, 41, 0.30) 0%, rgba(255, 241, 41, 0.30) 100%), #FFF";
    const bgcolor = type === "타임어택" ? lightpurple : lightyellow;

    const bcolor = type === "타임어택" ? "rgba(168, 140, 255, 0.10)" : "rgba(255, 241, 41, 0.20)";
    const color = type === "타임어택" ? props.theme.colors.blue : props.theme.colors.orange;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const xsmall = props.theme.fontSizes.xsmall;
    return css`
      display: flex;
      padding: 4px 6px 4px 4px;
      align-items: center;
      gap: 1.5px;
      border-radius: 6px;
      border: 0.7px solid ${bcolor};
      background: ${bgcolor};

      .type-text {
        font-family: ${font};
        font-size: ${xsmall};
        color: ${color};
      }
    `;
  }};
`;

const StyledCardHeader = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemiBold;
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const small = props.theme.fontSizes.small;
    const xsmall = props.theme.fontSizes.xsmall;

    const color = props.type === "타임어택" ? white : black;

    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      font-family: ${font};
      color: ${color};

      //
      width: 100%;
      text-align: center;

      .title {
        font-size: ${small};
      }

      .writer {
        font-size: ${xsmall};
      }
    `;
  }};
`;

const StyledProbability = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.EnglishFontBold;
    const size = props.theme.fontSizes.large;
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const yellow = props.theme.colors.yellow;

    let color;
    if (props.type === "타임어택") {
      color = white;
    } else {
      const probability = parseInt(props.probability, 10);
      color = probability <= 40 ? black : yellow;
    }

    return css`
      color: ${color};
      text-align: right;
      font-family: ${font};
      font-size: ${size};
    `;
  }};
`;

const StyledRemainTime = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const color = props.type === "타임어택" ? white : black;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const size = props.theme.fontSizes.xsmall;

    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;

      .time-text {
        display: flex;
        align-items: center;
      }
      .text {
        padding-left: 2px;
      }
    `;
  }};
`;

const StyledImg = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const yellow = props.theme.colors.yellow;

    let color;
    if (props.type === "타임어택") {
      color = white;
    } else {
      const probability = parseInt(props.probability, 10);
      color = probability <= 40 ? black : yellow;
    }

    return css`
      border: 2px dashed ${color};
      border-radius: 100px;
      width: 86px;
      padding-top: 2px;
      padding-left: 2px;
    `;
  }};
`;

export { StyledCard, StyledTag, StyledRemainTime, StyledImg, StyledProbability, StyledCardHeader };
