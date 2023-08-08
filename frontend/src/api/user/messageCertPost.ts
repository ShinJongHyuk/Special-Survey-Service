import api from "../api"

const messageCertPost = async (phoneNumber:any) => {
    try {
        const res = await api({
            method : 'post',
            url: '/message/cert/signup/send',
            data : {
                phoneNumber : phoneNumber
            }
        })
        return res
    } catch(err) {
        throw err
    }
}


export default messageCertPost