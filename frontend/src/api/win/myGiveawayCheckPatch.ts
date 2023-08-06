import api from "../api";

const myGiveawayCheckPatch = async (surveyid: any) => {
  try {
    const response = await api.patch(`/user/survey-result/check/` + surveyid, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    console.log("myGiveawayCheckPath : ", response.data);
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default myGiveawayCheckPatch;
