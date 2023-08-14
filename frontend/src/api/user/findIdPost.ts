import api from "../api";

const findIdPost = async (phoneNumber: string) => {
  //console.log(phoneNumber);
  const res = await api({
    method: "post",
    url: "/user/find/email",
    data: {
      phoneNumber,
    },
  });
  return res.data;
};

export default findIdPost;
