import api from "../api";

const surveyPost = async (answers: any) => {
  const accessToken = localStorage.getItem("accessToken")
  try {
    await api({
        method : 'post',
        url : 'question/answers',
        data : {
            answers
        },
        params : {
            surveyId : "16"
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