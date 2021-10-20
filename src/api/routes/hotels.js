import API from "@/api";

const hotels = "/hotels";
const hotelDetails = "/hotel-details";

export function getHotels() {
  return API.get(`${hotels}`);
}

export function getHotelDetails() {
  return API.get(`${hotelDetails}`);
}

export function getHotel(id) {
  return API.get(`${hotelDetails}/${id}`);
}
