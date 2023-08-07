import api from "../api";

const myGiveawayGet = async () => {
  try {
    const response = await api.get("/user/giveaways", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    if (response.data.success) {
      return response.data.response;
    } else {
      console.log("error: ", response.data.apiError.message);
    }
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default myGiveawayGet;
