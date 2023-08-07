import api from "../api";

const surveyDetailGet = async (id: any) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log("at : ", accessToken);
    const response = await api.get("/survey/detail/" + id, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
    // if (response.data.success) {
    //   console.log("survey detail get : ", response.data.response);
    // } else {
    //   console.log("error: ", response.data.apiError.message);
    // }
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default surveyDetailGet;
