import styled, {css} from 'styled-components'

const StyledButton = styled.button.attrs<any>((props) => ({
}))`
    ${(props) => {
        return css`
            border-radius: 48px;
            width: 100%;
            height: 100%;
            background-color: #8E69FF;
            color: black;
        `
    }}
`

export {StyledButton}