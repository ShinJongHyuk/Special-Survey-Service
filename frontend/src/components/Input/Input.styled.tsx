import styeld, {css} from 'styled-components'

const StyledInput = styeld.input.attrs<any>((props) => ({
    value : props.value || undefined,
    placeholder : props.placeholder || null
}))`
    ${(props) => {
        return css`
            width: 100%;
            height: 100%;
            border: 1px solid black;
            background-color: white;
        `
    }}
`

export {StyledInput}