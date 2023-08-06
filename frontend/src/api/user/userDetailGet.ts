import api from "../api";

const userDetailGet = async () => {
  try {
    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data.response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default userDetailGet;
