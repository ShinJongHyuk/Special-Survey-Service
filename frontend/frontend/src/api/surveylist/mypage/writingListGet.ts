import api from "../../api";

const writingListGet = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get("/survey/writing", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log("writing: ", response.data.response)
        return response.data.response;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default writingListGet;
