import api from "@/api/axios";

export const getServices = async (queries) => {
  const response = await api.get("/services", { params: queries });

  return response.data;
};

export const getService = async (serviceId) => {
  const response = await api.get(`/services/${serviceId}`);

  return response.data;
};

export const createService = async (service) => {
  const response = await api.post(`/services`, service);

  return response.data;
};

export const updateService = async (serviceId, data) => {
  const response = await api.patch(`/services/${serviceId}`, data);

  return response.data;
};

export const deleteService = async (serviceId) => {
  const response = await api.delete(`/services/${serviceId}`);

  return response.data;
};
