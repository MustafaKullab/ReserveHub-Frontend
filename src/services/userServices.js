import api from "@/api/axios";

export const getMe = async () => {
  const response = await api.get("/users/me");

  return response.data;
};

export const updateMe = async (data) => {
  const response = await api.patch("/users/me", data);

  return response.data;
};

export const getUsers = async (page, limit) => {
  const response = await api.get("/users", { params: { page, limit } });

  return response.data;
};

export const getUserAdmin = async (id) => {
  const response = await api.get(`/users/${id}`);

  return response.data;
};

export const updateRole = async (userId, role) => {
  const response = await api.patch(`/users/${userId}/role`, { role });

  return response.data;
};
