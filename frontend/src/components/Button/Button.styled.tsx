import styled, {css} from 'styled-components'

const StyledButton = styled.button.attrs<any>((props) => ({
}))`
    ${(props) => {
        const purple = props.theme.colors.purple
        const black = props.theme.colors.black
        return css`
            border-radius: 48px;
            width: 100%;
            height: 100%;
            background-color: ${purple};
            color: ${black};
        `
    }}
`

export {StyledButton}