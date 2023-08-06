import styled, { css } from "styled-components";

const StyledBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {

        return css`
            width: 100%;
            height: 100%;
            margin-top: 120px;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            gap: 35px;

    `;
    }};
`;
const StyledTitleBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
        const font = props.theme.fonts.HangeulFontSemiBold;
        const black = props.theme.colors.black;
        const ml = props.theme.fontSizes.mediumlarge;
        const small = props.theme.fontSizes.small;

        return css`
            color: ${black};
            font-family: ${font};
            text-align: center;

            width: 100%;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            gap: 9px;

            .title{
                font-size: ${ml};
            }

            .subtitle{
                font-size: ${small};
            }
    `;
    }};
`;

const StyledWinBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
        const black = props.theme.colors.black;
        const font = props.theme.fonts.HangeulFontSemiBold;
        const size = props.theme.fontSizes.mediumlarge;
        return css`
            position: relative;
            width: 380px;
            height: 140px; 
            display: inline-flex;
            align-items: center;
            justify-content: center;

            font-family: ${font};
            font-size: ${size};
            color: ${black};
        `;
    }};
`;

export { StyledTitleBox, StyledBox, StyledWinBox } 