import api from "../api";

const userTimeListGet = async (accessToken: any) => {
    try {
        const response = await api.get("/survey/recommend/time/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log("user speedy: ", response.data.response)
        return response.data.response;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default userTimeListGet;
