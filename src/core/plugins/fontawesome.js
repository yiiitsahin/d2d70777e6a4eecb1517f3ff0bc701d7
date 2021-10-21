import Vue from "vue";
import {
  faBed,
  faAngleDoubleLeft,
  faLiraSign,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCalendarAlt, faBed, faCreditCard, faAngleDoubleLeft, faLiraSign);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);
