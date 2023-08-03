import api from "../api";

const timeListGet = async () => {
  try {
    const response = await api.get("/survey/recommend/time/anonymous");
    return response.data.response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default timeListGet;
