import Vue from "vue";
import Vuex from "vuex";
import { hotels, reservations } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    reservations,
    hotels,
  },
});
