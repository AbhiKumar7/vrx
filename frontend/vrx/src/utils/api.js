import { axiosInstance } from "./axios";

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("userapi/me");
    return res.data;
  } catch (error) {
    return null;
  }
};

export const signup = async (SignupData) => {
  const response = await axiosInstance.post("userapi/register", SignupData);

  return response.data;
};
export const login = async (logindata) => {
  const response = await axiosInstance.post("userapi/login", logindata);
  
  
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post("userapi/logout");
  return response.data;
};