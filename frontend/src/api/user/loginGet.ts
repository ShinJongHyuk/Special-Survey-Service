import api from "../api";

const loginGet = async (accessToken:any) => {
    const response = await api({
        method: 'get',
        url: `http://221.164.64.185:8080/api/user`,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response
  } 

  export default loginGet