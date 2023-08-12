import api from "../api";

const messageCertPost2 = async (data: any) => {
  try {
    const res = await api({
      method: "post",
      url: "/message/cert/signup/auth",
      data: {
        ...data,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export default messageCertPost2;
