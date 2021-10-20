import { getHotels } from "@/api/routes/hotels";

const hotels = {
  namespaced: true,

  state: {
    hotels: [],
  },

  getters: {
    hotels(state) {
      return state.hotels;
    },
  },

  mutations: {
    SET_HOTELS(state, data) {
      state.hotels = data;
    },
  },

  actions: {
    async GetHotels({ commit }) {
      const hotels = await getHotels();
      commit("SET_HOTELS", hotels.data);
    },
  },
};

export default hotels;
