import api from "../api";
import timeListGet from "./timeListGet";

const userTimeListGet = async (accessToken: any) => {
  try {
    const response = await api.get("/survey/recommend/time/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.response;
    } else {
      const data = await timeListGet();
      return data;
    }
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default userTimeListGet;
