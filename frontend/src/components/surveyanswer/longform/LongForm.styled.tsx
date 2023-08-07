import styled from 'styled-components'

const LongInput = styled.input.attrs<any>((props) => ({
    placeholder : props.placeholder,
    maxLength :255
}))`
    display: flex;
    padding: 10px;
    border: hidden;
    border-radius: 8px ;
    background: #F7F8FB;
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    height: 70px;
    resize: none;
    &::placeholder {    
        color: #96989C;
    }
`
export { LongInput }