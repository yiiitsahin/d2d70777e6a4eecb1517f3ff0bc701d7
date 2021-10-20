import { getReservations } from "@/api/routes/reservations";
import { getDayDiff } from "@/helpers";
import STEPS from "@/constants/reservationSteps";
import STORAGE_KEY from "@/constants/localStorageKeys";

const reservations = {
  namespaced: true,

  state: {
    reservations: [],
    currentStep: STEPS.HOTEL_AND_DATE,
    formValues: {},
  },

  getters: {
    reservations(state) {
      return state.reservations;
    },
    currentStep(state) {
      return state.currentStep;
    },
    formValues(state) {
      return state.formValues;
    },
    reservationDays(state) {
      if (state.formValues.start_date) {
        return getDayDiff(
          state.formValues.start_date,
          state.formValues.end_date
        );
      }
      return 0;
    },
  },

  mutations: {
    SET_RESERVATIONS(state, data) {
      state.reservations = data;
    },
    SET_STEP(state, step) {
      state.currentStep = step;
    },
    SET_FORM_VALUES(state, data) {
      state.formValues = { ...state.formValues, ...data };
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
    async SetFormValues({ commit }, data) {
      commit("SET_FORM_VALUES", data);
    },
    SaveReservationValues({ commit }, { data, step }) {
      commit("SET_STEP", step);
      commit("SET_FORM_VALUES", data);
      localStorage.setItem(STORAGE_KEY.CURRENT_STEP, step);
      localStorage.setItem(STORAGE_KEY.RESERVATION_DATA, JSON.stringify(data));
    },
    FetchLocalStorageValues({ commit }) {
      const step =
        JSON.parse(localStorage.getItem(STORAGE_KEY.CURRENT_STEP)) || 0;
      const formValues = JSON.parse(
        localStorage.getItem(STORAGE_KEY.RESERVATION_DATA)
      );
      commit("SET_STEP", step);
      commit("SET_FORM_VALUES", formValues);
    },
  },
};

export default reservations;
