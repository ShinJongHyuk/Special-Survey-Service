import api from "../../api";

const paymentDataPost = async (paymentData : any) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await api.post("/order/regist", paymentData,{
          headers: {
              Authorization: `Bearer ${accessToken}`
          }
      });
      console.log("Post PaymentData: ", response.data.response)
      return response.data.response;
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    }
  };
  

export default paymentDataPost;