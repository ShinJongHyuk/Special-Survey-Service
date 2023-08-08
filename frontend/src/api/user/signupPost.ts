import api from "../api";

const signupPost = async (user:any) => {
    try {
        const res = await api({
            method : 'post',
            url : '/signup',
            data : {...user}
        })
        console.log(res)
        return res
    } catch (err) {
        console.log(err)
        throw(err)
    }
    
    
}

export default signupPost