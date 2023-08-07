import api from "../api";

const surveyAnswerLogGet = async (id: any) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get("/survey/answer/log/" + id, {
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

export default surveyAnswerLogGet;
