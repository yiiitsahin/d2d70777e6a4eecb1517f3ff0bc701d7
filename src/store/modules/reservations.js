import {
  getReservations,
  completeReservation,
  updateReservation,
  deleteReservation,
} from "@/api/routes/reservations";
import { getDayDiff } from "@/helpers";
import STEPS from "@/constants/reservationSteps";
import STORAGE_KEY from "@/constants/localStorageKeys";

const reservations = {
  namespaced: true,

  state: {
    reservations: [],
    currentStep: STEPS.HOTEL_AND_DATE,
    formValues: {},
    reservationId: null,
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
          state.formValues.end_date,
          state.formValues.start_date
        );
      }
      return 0;
    },
    reservationId(state) {
      return state.reservationId;
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
    SET_RESERVATION_ID(state, id) {
      state.reservationId = id;
    },
    CLEAR_FORM_VALUES(state) {
      state.formValues = {};
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
    SaveReservationValues({ commit, state }, { data, step }) {
      commit("SET_STEP", step);
      commit("SET_FORM_VALUES", data);
      localStorage.setItem(STORAGE_KEY.CURRENT_STEP, step);
      localStorage.setItem(
        STORAGE_KEY.RESERVATION_DATA,
        JSON.stringify(state.formValues)
      );
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
    async CompleteReservation({ commit }, payload) {
      try {
        const reservation = await completeReservation(payload);
        const reservationId = reservation.data.id;
        commit("SET_RESERVATION_ID", reservationId);
        // eslint-disable-next-line no-empty
      } catch (ex) {}
    },
    async UpdateReservation({ commit }, { id, payload }) {
      try {
        const reservation = await updateReservation(id, payload);
        const reservationId = reservation.data.id;
        commit("SET_RESERVATION_ID", reservationId);
        // eslint-disable-next-line no-empty
      } catch (ex) {}
    },
    async DeleteReservation({ commit }, id) {
      try {
        await deleteReservation(id);
        commit("SET_RESERVATION_ID", null);
        // eslint-disable-next-line no-empty
      } catch (ex) {}
    },
    async ResumeApp({ commit }) {
      localStorage.removeItem(STORAGE_KEY.CURRENT_STEP);
      localStorage.removeItem(STORAGE_KEY.RESERVATION_DATA);
      commit("CLEAR_FORM_VALUES");
      commit("SET_RESERVATION_ID", null);
      commit("SET_STEP", STEPS.HOTEL_AND_DATE);
      commit("payment/clearCardFields", null, { root: true });
    },
  },
};

export default reservations;
