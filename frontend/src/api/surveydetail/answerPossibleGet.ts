import api from "../api";

const AnswerPossibleGet = async (id: any) => {
    try {
        // console.log("answer possible get id: ", id);
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get("/survey/possible/" + id, {
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

export default AnswerPossibleGet;
