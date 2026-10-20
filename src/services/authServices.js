import api from '@/api/axios';

export const signup = async (formData) => {
  const response = await api.post("/auth/signup" , formData);

  return response.data;
}

export const verifyAccount = async (data) => {
  const response = await api.post("/auth/verify" , data);

  return response.data;
}

export const forgotPassword = async (data) => {
  const response = await api.post("/auth/forgot-password" , data);

  return response.data;
}

export const resetPassword = async (data) => {
  const response = await api.post("/auth/reset-password" , data);

  return response.data;
}

export const resendVerification = async (data) => {
  const response = await api.post("/auth/resend-verification" , data);

  return response.data;
}

export const resendResetPassword = async (data) => {
  const response = await api.post("/auth/resend-reset-password" , data);

  return response.data;
}

export const login = async (data) => {
  const response = await api.post("/auth/login" , data);

  return response.data;
}


export const refreshAccessToken = async () => {
  const response = await api.post("/auth/refresh");

  return response.data;
}

export const logout = async () => {
  const response = await api.post("/auth/logout");

  return response.data;
}
