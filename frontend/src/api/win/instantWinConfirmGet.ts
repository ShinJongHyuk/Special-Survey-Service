import api from "../api";

const instantWinConfirmGet = async (surveyid: any) => {
  try {
    const response = await api.get("/user/survey/" + surveyid, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    return response.data.response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default instantWinConfirmGet;
