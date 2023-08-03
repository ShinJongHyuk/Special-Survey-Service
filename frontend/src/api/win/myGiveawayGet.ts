import api from "../api";

const myGiveawayGet = async () => {
  try {
    const response = await api.get("/user/giveaways", {
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

export default myGiveawayGet;
