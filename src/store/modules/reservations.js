import { getReservations } from "@/api/routes/reservations";
import STEPS from "@/constants/reservationSteps";

const reservations = {
  namespaced: true,

  state: {
    reservations: [],
    currentStep: STEPS.HOTEL_AND_DATE,
  },

  getters: {
    reservations(state) {
      return state.reservations;
    },
    currentStep(state) {
      return state.currentStep;
    },
  },

  mutations: {
    SET_RESERVATIONS(state, data) {
      state.reservations = data;
    },
    SET_STEP(state, step) {
      state.currentStep = step;
    },
  },

  actions: {
    async GetReservations({ commit }) {
      const reservations = await getReservations();
      commit("SET_RESERVATIONS", reservations);
    },
    async SetStep({ commit }, step) {
      commit("SET_STEP", step);
    },
  },
};

export default reservations;
