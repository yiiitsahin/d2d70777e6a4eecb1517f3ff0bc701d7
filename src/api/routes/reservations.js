import API from "@/api";

const reservations = "/hotel-bookings";

export function getReservations() {
  return API.get(`${reservations}`);
}

export function getReservation(id) {
  return API.get(`${reservations}/${id}`);
}

export function addReservation(payload) {
  return API.post(`${reservations}`, payload);
}

export function updateReservation(id, payload) {
  return API.put(`${reservations}/${id}`, payload);
}

export function deleteReservation(id) {
  return API.delete(`${reservations}/${id}`);
}
