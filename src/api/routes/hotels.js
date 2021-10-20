import API from "@/api";

const hotels = "/hotels";
const hotelsDetails = "/hotel-details";

export function getHotels() {
  return API.get(`${hotels}`);
}

export function getHotelsDetails() {
  return API.get(`${hotelsDetails}`);
}

export function getHotel(id) {
  return API.get(`${hotelsDetails}/${id}`);
}
