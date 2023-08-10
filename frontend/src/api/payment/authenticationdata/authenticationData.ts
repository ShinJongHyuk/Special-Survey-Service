import api from "../../api";

const authenticationDataPost = async (authenticationData : any) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await api.post("/payment/authentication", authenticationData,{
          headers: {
              Authorization: `Bearer ${accessToken}`
          }
      });
      console.log("Post AuthenticationData: ", response.data.response)
      return response.data.response;
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    }
  };
  

export default authenticationDataPost;