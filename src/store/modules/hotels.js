import { getHotels, getHotelsDetails } from "@/api/routes/hotels";
import store from "@/store";

const hotels = {
  namespaced: true,

  state: {
    hotels: [],
    hotelsDetails: [],
  },

  getters: {
    hotels(state) {
      return state.hotels;
    },
    hotelsDetails(state) {
      return state.hotelsDetails;
    },
    hotelNames(state) {
      const hotels = state.hotels;
      return hotels.reduce((acc, current) => {
        acc[current.id] = current.hotel_name;
        return acc;
      }, {});
    },
    savedHotelDetails(state) {
      const selectedHotel = store.getters["reservations/formValues"].hotel_id;
      const hotel = state.hotelsDetails.filter(
        (hotel) => hotel.hotel_id === selectedHotel
      );
      if (hotel.length !== 0) {
        const hotel_name =
          store.getters["hotels/hotelNames"][`${selectedHotel}`];
        return { hotel_name, ...hotel[0] };
      }
      return {};
    },
  },

  mutations: {
    SET_HOTELS(state, data) {
      state.hotels = data;
    },
    SET_HOTELS_DETAILS(state, data) {
      state.hotelsDetails = data;
    },
  },

  actions: {
    async GetHotels({ commit }) {
      const hotels = await getHotels();
      commit("SET_HOTELS", hotels.data);
    },
    async GetHotelsDetails({ commit }) {
      const hotelsDetails = await getHotelsDetails();
      commit("SET_HOTELS_DETAILS", hotelsDetails.data);
    },
    GetAll({ dispatch }) {
      dispatch("GetHotels");
      dispatch("GetHotelsDetails");
    },
    async GetHotelName({ state }, id) {
      const hotel = state.hotels.filter((hotel) => +hotel.id === id);
      if (hotel.length) {
        return hotel[0].hotel_name;
      }
      return "";
    },
  },
};

export default hotels;
