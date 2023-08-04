import api from "../api";

const loginPost = async (user:any) => {
    const res = await api({
          method : 'post',
          url : '/authenticate',
          data : {
            ...user
          }
      })
      return res
  } 

  export default loginPost