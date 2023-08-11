import styeld, {css} from 'styled-components'

const StyledInput = styeld.input.attrs<any>((props) => ({
    value : props.value || undefined,
    placeholder : props.placeholder || null,
    disabled : props.disabled || false

}))`
    ${(props) => {
        const inputState = props.inputstate || false
        const disabled = props.disabled || false
        return css`
            padding-left: 10px;
            width: 100%;
            height: 100%;
            border: 1px solid black;
            background-color: ${() => disabled ? props.theme.colors.lightgray : props.theme.colors.white };
            border: 2px solid ${(() => (inputState ? "black" : "red"))};
        `
    }}
`

export {StyledInput}