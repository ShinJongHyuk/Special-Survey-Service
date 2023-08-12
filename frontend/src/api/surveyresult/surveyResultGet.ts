import api from "../api";

const surveyResultGet = async (surveyId: any) => {
  const accessToken = localStorage.getItem("accessToken")
  try {
    const res = await api({
        method : 'get',
        url : `survey/statistics/${surveyId}`,
        headers : {
            Authorization : `bearer ${accessToken}`
        }
    })
    return res
    } catch (err) {
        throw err
    }
}


export default surveyResultGet;
