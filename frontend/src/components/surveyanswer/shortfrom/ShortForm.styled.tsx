import styled from 'styled-components'

const ShortInput = styled.input.attrs<any>((props) => ({
    placeholder : props.placeholder,
    disabled : props.disabled || false
}))`
    display: flex;
    padding: 10px;
    border: hidden;
    border-radius: 8px ;
    background: #F7F8FB;
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    margin-top: auto;
    margin-bottom: auto;

    &::placeholder {    
        color: #96989C;
    }
`
export { ShortInput }