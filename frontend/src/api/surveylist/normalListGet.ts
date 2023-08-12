import api from "../api";

const normalListGet = async () => {
  try {
    const response = await api.get("/survey/recommend/normal/anonymous");

    if (response.data.success) {
      return response.data.response;
    }
    return [];
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default normalListGet;
