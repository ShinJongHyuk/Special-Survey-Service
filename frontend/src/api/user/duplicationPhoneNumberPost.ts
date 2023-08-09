import api from "../api";

const duplicationPhoneNumberPost = async (payload:any) => {
    try {
        const res = await api({
            method : 'post',
            url : "/duplicate/phone-number",
            data : {
                phoneNumber : payload
            }
        })
        return res
    } catch(err) {
        throw err
    }
}

export default duplicationPhoneNumberPost