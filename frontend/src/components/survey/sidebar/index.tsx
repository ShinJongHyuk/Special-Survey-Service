import React from 'react'
import { Sidebar_Container,Align_Container,List_Container,Font_Container,Color_Container, Title_Container } from './Sidebar.styled'

const Sidebar = () => {
    return (
        <Sidebar_Container>
            <Title_Container></Title_Container>
            <Align_Container></Align_Container>
            <List_Container></List_Container>
            <Font_Container></Font_Container>
            <Color_Container></Color_Container>
        </Sidebar_Container>
    )
}

export default Sidebar