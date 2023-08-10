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
        resetAnswer : () => set({
            answer : []
        }),
        linkNumber : [],
        resetLinkNumber : () => set({
            linkNumber : []
        }),


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
        }),

        removeLinkAnswer : (data:any) => set((state:any) => {
            const newAnswer = state.answer.filter((e:any) => {
                return e.questionId != data
            })
            return {
                answer : [...newAnswer]
            }
        }),

        checkBoxAnswer : [],
        setCheckBoxAnswer : (data:any) => set((state:any) => {
            const checkBox = [...state.checkBoxAnswer]
            const newCheckBox = state.checkBoxAnswer.filter((e:any) => {
                return e.multipleChoiceAnswer != data.multipleChoiceAnswer
            })
            if (checkBox.length === newCheckBox.length) {
                return {
                    checkBoxAnswer : [
                        ...newCheckBox,
                        data
                    ]
                }
            } else if (checkBox.length !== newCheckBox.length) {
                return {
                    checkBoxAnswer : [
                        ...newCheckBox
                    ]
                }
            }
        }),
        resetCheckBox : () => set({
            checkBoxAnswer : []
        }),

        removeCheckBoxLinkNumver : (data:any) => set((state:any) => {
            if (state.linkNumber.includes(data)) {
                const newLinkNumber = state.linkNumber.filter((e:any) => {
                    return e !== data
                })
                return {
                    linkNumber : [...newLinkNumber]
                }
            } else {
                return {
                    linkNumber : [...state.linkNumber, data]
                }
            }
        }),

        removeCheckBoxAnswer : (data:any) => set((state:any) => {
            const newAnswer = state.checkBoxAnswer.filter((e:any) => {
                return e.questionId != data
            })
            return {
                checkBoxAnswer : [...newAnswer]
            }
        }),

        dateAnswer : [],
        setDateAnswer : (data:any) => set((state:any) => {
            const newDateAnswer = state.dateAnswer.filter((e:any) => {
                return e.questionId != data.questionId
            })
            return {
                dateAnswer : [
                    ...newDateAnswer,
                    data
                ]
            }
        }),
        resetDateAnswer : () => set({
            dateAnswer : []
        }),
        removeLinkDateAnswer : (data:any) => set((state:any) => {
            const newAnswer = state.dateAnswer.filter((e:any) => {
                return e.questionId != data
            })
            return {
                dateAnswer : [...newAnswer]
            }
        }),

        timeAnswer : [],
        setTimeAnswer : (data:any) => set((state:any) => {
            const newTimeAnswer = state.timeAnswer.filter((e:any) => {
                return e.questionId != data.questionId
            })
            return {
                timeAnswer : [
                    ...newTimeAnswer,
                    data
                ]
            }
        }),
        resetTimeAnswer : () => set({
            timeAnswer : []
        }),
        removeLinkTimeAnswer : (data:any) => set((state:any) => {
            const newAnswer = state.timeAnswer.filter((e:any) => {
                return e.questionId != data
            })
            return {
                timeAnswer : [...newAnswer]
            }
        })

    }))
)

export default useSurveyAnswerStore