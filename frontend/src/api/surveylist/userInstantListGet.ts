import api from "../api";

const userInstantListGet = async (accessToken: any) => {
    try {
        const response = await api.get("/survey/recommend/instant/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log("user instant: ", response.data.response)
        return response.data.response;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default userInstantListGet;
