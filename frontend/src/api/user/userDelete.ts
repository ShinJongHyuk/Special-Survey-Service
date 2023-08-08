import api from "../api";

const userDelete = async () => {
    const accessToken = localStorage.getItem("accessToken")
    const response = await api({
      method: 'delete',
      url: `/user`,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      return response
  } 

  export default userDelete