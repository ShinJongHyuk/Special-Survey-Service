import api from "../../api";

const giveawayListGet = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.get("/giveaway", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data.success) {
      return response.data.response;
    }
    return [];
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default giveawayListGet;
