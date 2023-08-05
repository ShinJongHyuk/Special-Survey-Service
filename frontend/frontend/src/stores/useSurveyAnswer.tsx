import {create} from 'zustand'

const useSurveyAnswerStore = create(
    ((set) => ({
        answer : [],
        setAnswer : (data:any) => set((state:any) => {
            const newAnswer = state.answer.filter((element:any) => {
                return element.questionId !== data.questionId
            })
            return {
                answer : [...newAnswer, data]
            }
            
        }),
        linkNumber : [],
        setLinkNumber : (data:any) => set((state:any) => (state.linkNumber.push(data)))
    }))
)

export default useSurveyAnswerStore