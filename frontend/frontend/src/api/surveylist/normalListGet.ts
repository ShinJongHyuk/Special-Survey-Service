import api from "../api";

const normalListGet = async () => {
  try {
    const response = await api.get("/survey/recommend/normal/anonymous");

    return response.data.response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default normalListGet;
