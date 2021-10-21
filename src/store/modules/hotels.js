import { getHotels, getHotelsDetails } from "@/api/routes/hotels";
import store from "@/store";

const hotels = {
  namespaced: true,

  state: {
    hotels: [],
    hotelsDetails: [],
    coupon: null,
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
    roomType() {
      const roomTypes =
        (store.getters["hotels/savedHotelDetails"] &&
          store.getters["hotels/savedHotelDetails"].room_type) ||
        [];
      if (roomTypes.length > 0) {
        return roomTypes.filter(
          (item) =>
            item.id === store.getters["reservations/formValues"].room_type
        )[0];
      }
    },
    sceneType() {
      const sceneTypes =
        (store.getters["hotels/savedHotelDetails"] &&
          store.getters["hotels/savedHotelDetails"].room_scenic) ||
        [];
      if (sceneTypes.length > 0) {
        return sceneTypes.filter(
          (item) =>
            item.id === store.getters["reservations/formValues"].room_scenic
        )[0];
      }
    },
    roomPrice() {
      return (
        (store.getters["hotels/roomType"] &&
          store.getters["hotels/roomType"].price) ||
        0
      );
    },
    priceRate() {
      return (
        store.getters["hotels/sceneType"] &&
        store.getters["hotels/sceneType"].price_rate
      );
    },
    percentFactor() {
      return 1 + store.getters["hotels/priceRate"] / 100;
    },
    adultCount() {
      return store.getters["reservations/formValues"].adult;
    },
    childCount() {
      return store.getters["reservations/formValues"].child;
    },
    accommodationPrice() {
      return (
        store.getters["reservations/reservationDays"] *
        store.getters["hotels/adultCount"] *
        store.getters["hotels/roomPrice"]
      );
    },
    discount() {
      return 0;
    },
    totalPrice() {
      const percentFactor = store.getters["hotels/percentFactor"];
      const accommodationPrice = store.getters["hotels/accommodationPrice"];
      const discount = store.getters["hotels/discount"];
      const total = Math.floor(accommodationPrice * percentFactor - discount);
      return total;
    },
    properties() {
      const accommodationPrice = store.getters["hotels/accommodationPrice"];
      const adultCount = store.getters["hotels/adultCount"];
      const roomType = store.getters["hotels/roomType"];
      const sceneType = store.getters["hotels/sceneType"];
      const roomPrice = store.getters["hotels/roomPrice"];
      const discount = store.getters["hotels/discount"];
      const totalPrice = store.getters["hotels/totalPrice"];
      const priceRate = store.getters["hotels/priceRate"];
      const reservationDays = store.getters["reservations/reservationDays"];
      const childCount = store.getters["hotels/childCount"];
      const hotelName = store.getters["hotels/savedHotelDetails"].hotel_name;
      const hotelCity = store.getters["hotels/savedHotelDetails"].city;
      const startDate =
        store.getters["reservations/formValues"].start_date || null;
      const endDate = store.getters["reservations/formValues"].end_date || null;
      return {
        accommodationPrice,
        adultCount,
        roomType,
        sceneType,
        discount,
        totalPrice,
        priceRate,
        reservationDays,
        childCount,
        hotelName,
        hotelCity,
        startDate,
        endDate,
        roomPrice,
      };
    },
  },

  mutations: {
    SET_HOTELS(state, data) {
      state.hotels = data;
    },
    SET_HOTELS_DETAILS(state, data) {
      state.hotelsDetails = data;
    },
    SET_COUPON(state, data) {
      state.coupon = data;
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
    async SetCoupon({ commit }, data) {
      commit("SET_COUPON", data);
    },
  },
};

export default hotels;
