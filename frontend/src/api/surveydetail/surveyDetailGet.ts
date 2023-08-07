import api from "../api";

const surveyDetailGet = async (id: any) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.get("/survey/detail/" + id, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default surveyDetailGet;
