import api from "../api";

const userInstantListGet = async (accessToken: any) => {
    try {
        const response = await api.get("/survey/recommend/instant/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        if (response.data.success) {
            return response.data.response;
        } else {
            console.log("error: ", response.data);
        }
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default userInstantListGet;
