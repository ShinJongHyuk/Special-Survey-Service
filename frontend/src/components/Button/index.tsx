import { StyledButton } from "./Button.styled"

const ButtonStyle = (props:any) => {
    return (
        <StyledButton {...props}>{props.label || null}</StyledButton>
    )
}

export default ButtonStyle