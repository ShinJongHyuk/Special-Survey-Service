import api from "../api";

const makeSurveyPost = async (surveyDatas : any) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.post("/survey", surveyDatas,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    console.log("Post SurveyInformation: ", response.data.response)
    return response.data.response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default makeSurveyPost;