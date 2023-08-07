import api from "../api";

const surveyDetailGet = async (id: any) => {
  try {
    // console.log(id);
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.get("/survey/detail/" + id, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.response;
    } else {
      console.log("error: ", response.data.apiError.message);
    }
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default surveyDetailGet;
