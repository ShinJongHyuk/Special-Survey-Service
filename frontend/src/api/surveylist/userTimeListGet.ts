import api from "../api";

const userTimeListGet = async (accessToken: any) => {
    try {
        const response = await api.get("/survey/recommend/time/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
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

export default userTimeListGet;
