import api from "../api";

const resetPassword = async (data: any) => {
  const response = await api({
    method: "patch",
    url: `/user/update/password`,
    data,
  });
  return response;
};

export default resetPassword;
