'use client'
import { RadioContainer, RadioInput, RadioLabel, RadioFlex} from './MultipleChoice.styled'
const MultipleChoiceComponent = (props:any) => {
    return (
        <RadioContainer>
            <RadioFlex>
                <RadioInput id='1' name="test"/>
                <RadioLabel htmlFor='1'>내용1</RadioLabel>
            </RadioFlex>
            <RadioFlex>
                <RadioInput id='2' name="test"/>
                <RadioLabel htmlFor='2'>내용2</RadioLabel>
            </RadioFlex>
            <RadioFlex>
                <RadioInput id='3' name="test"/>
                <RadioLabel htmlFor='3'>내용3</RadioLabel>
            </RadioFlex>
            
        </RadioContainer>
    )
}

export default MultipleChoiceComponent