import api from "../api";

const userUpdatePatch = async (postUser:any) => {
    const accessToken = localStorage.getItem("accessToken")
    const response = await api({
      method: 'patch',
      url: `/user`,
      data : {
        ...postUser
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      return response
  } 

  export default userUpdatePatch