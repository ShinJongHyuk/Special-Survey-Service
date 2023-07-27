import styled, {css} from 'styled-components'
import { ButtonStyles } from './Button.type'
const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
    ${(props) => {
        const gender = props.checkgender || null
        const name = props.name || null
        const age = props.checkage || null
        const id = props.id || null
        const use = props.use || "basic";
        const useStyle:any = {
            basic : `
            border-radius: 48px;
            background-color : ${props.theme.colors.lightgray};
            color: ${props.theme.colors.white};
            `,
            SignUpLogin: `
            border-radius: 48px;
            background-color: ${props.theme.colors.yellow};
            color : ${props.theme.colors.black};
            `,
            gender : `
            background-color: ${gender === name ? props.theme.colors.yellow : props.theme.colors.lightgray};
            color : ${props.theme.colors.black};
            `,

            age : `
            background-color: ${age === id ? props.theme.colors.yellow : props.theme.colors.lightgray};
            color : ${props.theme.colors.black};
            `
        };
        return css`
            border: hidden;
            width: 100%;
            height: 100%;
            cursor: pointer;
            ${useStyle[use]};
            font-family: ${props.theme.fonts.HangeulFontRegular};
        `
    }}
`

export {StyledButton}
