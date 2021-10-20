import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/tr-TR";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBed, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import locale_tr from "dayjs/locale/tr";
import {
  faCalendarAlt,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import API from "@/api";

Vue.prototype.$http = API;
dayjs.locale(locale_tr);
Vue.prototype.$dayjs = dayjs;

Vue.use(ElementUI, { locale });

library.add(faCalendarAlt, faBed, faCreditCard, faAngleDoubleLeft);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);
