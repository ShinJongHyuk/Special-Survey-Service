import api from "../api";

const userNormalListGet = async (accessToken: any) => {
    try {
        const response = await api.get("/survey/recommend/normal/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log("user normal: ", response.data.response)
        return response.data.response;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default userNormalListGet;
