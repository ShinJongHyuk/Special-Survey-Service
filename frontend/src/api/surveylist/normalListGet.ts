import api from "../api";

const normalListGet = async (accessToken: any) => {
  console.log("accessToken = " + accessToken);
  try {
    const response = await api.get("/survey/recommend/normal/anonymous");
    return response.data.response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default normalListGet;
