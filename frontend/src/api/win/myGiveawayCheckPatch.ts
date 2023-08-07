import api from "../api";

const myGiveawayCheckPatch = async (surveyid: any) => {
  try {
    const response = await api.patch(`/user/survey-result/check/` + surveyid, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });

    if (response.data.success) {
      console.log("myGiveawayCheckPath : ", response.data);
    } else {
      console.log("error: ", response.data.apiError.message);
    }

  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default myGiveawayCheckPatch;
