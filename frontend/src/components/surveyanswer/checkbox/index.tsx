'use client'
import { CheckBoxContainer, CheckBoxFlex, CheckBoxInput, CheckBoxLabel } from './CheckBox.styled'
const CheckBoxComponent = (props:any) => {
    return (
        <CheckBoxContainer>
            <CheckBoxFlex>
                <CheckBoxInput name="test" id="11"/>
                <CheckBoxLabel htmlFor='11' >체크박스 1</CheckBoxLabel>
            </CheckBoxFlex>

            <CheckBoxFlex>
                <CheckBoxInput name="test" id="22"/>
                <CheckBoxLabel htmlFor='22'>체크박스 1</CheckBoxLabel>
            </CheckBoxFlex>

            <CheckBoxFlex>
                <CheckBoxInput name="test" id="33"/>
                <CheckBoxLabel htmlFor='33'>체크박스 1</CheckBoxLabel>
            </CheckBoxFlex>
        </CheckBoxContainer>
    )
}

export default CheckBoxComponent