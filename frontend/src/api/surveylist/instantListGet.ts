import api from "../api";

const instantListGet = async (accessToken: any) => {
  console.log("accessToken = " + accessToken);
  try {
    const response = await api.get("/survey/recommend/instant/anonymous");
    console.log("instant: ", response.data.response)
    return response.data.response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default instantListGet;
