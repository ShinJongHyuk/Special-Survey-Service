import api from "../api";

const instantwinCheckGet = async (id: any) => {
  try {
    const response = await api.get("/user/survey/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
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

export default instantwinCheckGet;
