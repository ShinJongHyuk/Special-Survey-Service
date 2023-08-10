import styled, {css} from 'styled-components'

const TimeInput = styled.input.attrs<any>((props) => ({
    type : props.type,
    disabled : props.disabled
}))` 
    ${(props) => {
        const color = props.surveyCategoryType === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange
        const disabled = props.disabled
        return css`
            display : flex;
            width : 60%;
            height: 40px;
            border-radius : 50px;
            margin-right : 20px;

            border : 2px solid ${props => disabled ? props.theme.colors.lightgray : color};
            letter-spacing : 7px;
            text-indent : 10px;
            text-align : center;
            font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
            font-size: ${props => props.theme.fontSizes.medium};
            color: ${props => disabled ? props.theme.colors.lightgray : color};
            cursor: pointer;
        `
    }}
`

export { TimeInput }