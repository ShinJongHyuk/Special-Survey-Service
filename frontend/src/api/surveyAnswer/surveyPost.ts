import api from "../api";

const surveyPost = async (answers:any, surveyId:any) => {
  const accessToken = localStorage.getItem("accessToken")
  console.log(answers)
  try {
    await api({
        method : 'post',
        url : 'question/answers',
        data : {
            answers : answers
        },
        params : {
            surveyId : surveyId
        },
        headers : {
            Authorization : `Bearer ${accessToken}`
        }
    })
    .then(res => console.log(res))
    // return res.data.response
} catch(err) {
    console.log(err)
} 
};

export default surveyPost;