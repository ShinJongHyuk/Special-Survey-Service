import styled, { css } from 'styled-components'
import { ButtonStyles } from './Button.type'
const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
    ${(props) => {
        const gender = props.checkgender || null
        const name = props.name || null
        const age = props.checkage || null
        const id = props.id || null
        const use = props.use || "basic";
        const font = props.theme.fonts.HangeulFontSemiBold;
        const lightgray = props.theme.colors.lightgray;
        const medium = props.theme.fontSizes.medium;
        const small = props.theme.fontSizes.small;

        const useStyle: any = {
            basic: `
                border-radius: 48px;
                background-color : ${props.theme.colors.lightgray};
                color: ${props.theme.colors.white};
            `,
            SignUpLogin: `
                border-radius: 48px;
                background-color: ${props.theme.colors.yellow};
                color : ${props.theme.colors.black};
            `,
            gender: `
                background-color: ${gender === name ? props.theme.colors.yellow : props.theme.colors.lightgray};
                color : ${props.theme.colors.black};
            `,
            blackwhite: `
                border-radius: 48px;
                background-color: ${props.theme.colors.black};
                color : ${props.theme.colors.white};
                font-size:${medium};
            `,
            whiteblack: `
                border-radius: 48px;
                background-color: ${props.theme.colors.white};
                color : ${props.theme.colors.black};
                font-size:${medium};
            `,

            age: `
                background-color: ${age === id ? props.theme.colors.yellow : props.theme.colors.lightgray};
                color : ${props.theme.colors.black};
            `,
            gray: `
                border-radius: 48px;
                border: 1px solid ${lightgray};
                font-size:${small};
                background-color: ${props.theme.colors.white};
            `
        };
        return css`
            border: hidden;
            width: 100%;
            height: 100%;
            cursor: pointer;
            font-family: ${font};
            ${useStyle[use]};
        `
    }}
`

export { StyledButton }
