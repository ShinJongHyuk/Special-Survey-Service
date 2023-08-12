import api from "../../api";

const writingListGet = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.get("/survey/writing", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.response;
    }
    return [];
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default writingListGet;
