import api from "../api";

const myGiveawayCheckPatch = async (giveawayid: any) => {
  try {
    const response = await api.patch(`/user/survey-result/check/` + giveawayid, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    console.log("myGiveawayCheckPath : ", response);
    return response.data.response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default myGiveawayCheckPatch;
