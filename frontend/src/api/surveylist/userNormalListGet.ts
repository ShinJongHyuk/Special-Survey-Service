import api from "../api";
import normalListGet from "./normalListGet";

const userNormalListGet = async (accessToken: any) => {
  try {
    const response = await api.get("/survey/recommend/normal/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.response;
    } else {
      const data = await normalListGet();
      return data;
    }
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default userNormalListGet;
