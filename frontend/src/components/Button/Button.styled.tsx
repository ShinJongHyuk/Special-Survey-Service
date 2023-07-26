import styled, {css} from 'styled-components'
import { ButtonStyles } from './Button.type'
const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
    ${(props) => {
        const use = props.use || "basic";
        const useStyle:any = {
            basic : `
            background-color : ${props.theme.colors.lightgray};
            color: ${props.theme.colors.white};
            `,
            SignUpLogin: `
            background-color: ${props.theme.colors.yellow};
            color : ${props.theme.colors.black};
            `
        };
        return css`
            border: hidden;
            border-radius: 48px;
            width: 100%;
            height: 100%;
            ${useStyle[use]};
        `
    }}
`

export {StyledButton}