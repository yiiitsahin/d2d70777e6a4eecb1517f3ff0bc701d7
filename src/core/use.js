import Vue from "vue";
import API from "@/api";

import "./plugins";
Vue.prototype.$http = API;
