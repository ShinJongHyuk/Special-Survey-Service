import api from "../api";

const userNormalListGet = async (accessToken: any) => {
    try {
        const response = await api.get("/survey/recommend/normal/user", {
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

export default userNormalListGet;
