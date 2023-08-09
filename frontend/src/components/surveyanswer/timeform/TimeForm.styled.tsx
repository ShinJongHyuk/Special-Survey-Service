import styled from 'styled-components'

const TimeInput = styled.input.attrs<any>((props) => ({
    type : props.type,
    disabled : props.disabled
}))`
     display : flex;
    width : 60%;
    height: 40px;
    border-radius : 50px;
    margin-right : 20px;

    border : 2px solid ${props => props.theme.colors.purple};
    letter-spacing : 7px;
    text-indent : 10px;
    text-align : center;
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.purple};

`

export { TimeInput }