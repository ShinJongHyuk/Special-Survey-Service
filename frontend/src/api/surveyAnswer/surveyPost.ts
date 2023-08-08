import api from "../api";

const surveyPost = async (answers:any, surveyId:any) => {
  const accessToken = localStorage.getItem("accessToken")
  try {
    const res = await api({
        method : 'post',
        url : 'question/answers',
        data : {
            answers
        },
        params : {
            surveyId : surveyId
        },
        headers : {
            Authorization : `Bearer ${accessToken}`
        }
    })
    return res
} catch(err) {
    console.log(err)
} 
};

export default surveyPost;