import styled from 'styled-components'

const DeleteUser = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    background-color: red;
    color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export { DeleteUser }