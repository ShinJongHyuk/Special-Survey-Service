import api from "../../api";

const answeredListGet = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get("/survey/answered", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log("answer: ", response.data.response)
        return response.data.response;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default answeredListGet;
