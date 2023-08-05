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
        setLinkNumber: (data:any) =>
        set((state:any) => {
            if (!state.linkNumber.includes(data)) {
                return {
                    linkNumber: [...state.linkNumber, data],
                };
            }
            return state;
        }),

        removeLinkNumber : (data:any) => set((state:any) => {
            const NewLinkNumber = state.linkNumber.filter((element:any) => {
                return element != data
            })
            return {
                linkNumber : [...NewLinkNumber]
            }
        }),

        removeAnswer : (data:any) => set((state:any) => {
            const newAnswer = state.answer.filter((element:any) => {
                return element.questionId !== data.questionId
            })
            return {
                answer : [...newAnswer]
            }
        })

    }))
)

export default useSurveyAnswerStore