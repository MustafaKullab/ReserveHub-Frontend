import api from "@/api/axios";

export const createBooking = async (bookingDetails) => {
  const response = await api.post("/bookings", bookingDetails);

  return response.data;
};

export const getBookings = async (queries = {}) => {
  console.log(queries);

  const response = await api.get("/bookings", {
    params: {
      status: queries.status,
      search: queries.search,
      limit: queries.limit,
      page: queries.page,
      scope: queries.scope,
    },
  });

  return response.data;
};

export const getBooking = async (bookingId) => {
  const response = await api.get(`/bookings/${bookingId}`);

  return response.data;
};

export const cancelBooking = async (bookingDetails) => {
  const response = await api.patch(`/bookings/${bookingDetails.bookingId}/status`);

  return response.data;
};

export const changeStatus = async (bookingDetails) => {
  const response = await api.patch(`/bookings/admin/${bookingDetails.bookingId}/status`, {
    status: bookingDetails.status,
  });

  return response.data;
};

export const updateBookingStatus = async (bookingId, updates) => {
  const response = await api.patch(`/bookings/${bookingId}/status`, updates);

  return response.data;
};
