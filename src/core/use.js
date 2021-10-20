import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/tr-TR";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(ElementUI, { locale });

library.add(faCalendarAlt, faBed, faCreditCard);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);
