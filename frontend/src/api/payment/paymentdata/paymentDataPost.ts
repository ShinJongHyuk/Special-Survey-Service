import api from "../../api";

const paymentDataPost = async (paymentData : any) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await api.post("/order/regist", paymentData,{
          headers: {
              Authorization: `Bearer ${accessToken}`
          }
      });
      console.log(response,"리스폰스")
      console.log("Post SurveyInformation: ", response.data.response)
      return response.data.response;
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    }
  };
  

export default paymentDataPost;