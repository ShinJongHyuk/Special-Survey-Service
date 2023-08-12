import api from "../api";

const timeListGet = async () => {
  try {
    const response = await api.get("/survey/recommend/time/anonymous");
    if (response.data.success) {
      return response.data.response;
    }
    return [];
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default timeListGet;
