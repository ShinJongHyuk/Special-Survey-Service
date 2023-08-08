import api from "../api";
import instantListGet from "./instantListGet";

const userInstantListGet = async (accessToken: any) => {
  try {
    const response = await api.get("/survey/recommend/instant/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.response;
    } else {
      const data = await instantListGet();
      console.log("error: ", response.data.apiError.message);
      return data;
    }
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default userInstantListGet;
