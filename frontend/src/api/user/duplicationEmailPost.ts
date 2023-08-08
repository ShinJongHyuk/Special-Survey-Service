import api from "../api";

const duplicationEmailPost = async (email:any) => {
    try {
        const res = await api({
            method : 'post',
            url : '/duplicate/email',
            data : {
                email: email
            }
        })
        return res
    } catch(err){
        throw err
    }
}

export default duplicationEmailPost