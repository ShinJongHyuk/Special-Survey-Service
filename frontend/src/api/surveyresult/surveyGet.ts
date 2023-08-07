import api from "../api";

const GetSurvey = async (survey_id: any) => {
  const accessToken = localStorage.getItem("accessToken")
  try {
    const res = await api.get(`/survey/${survey_id}`,{
        headers : {
            Authorization : `Bearer ${accessToken}`
        }
    })
    return res.data.response
} catch(err) {
    console.log(err)
} 
};

export default GetSurvey;