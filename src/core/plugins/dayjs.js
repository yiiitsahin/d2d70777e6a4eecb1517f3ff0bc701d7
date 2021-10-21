import Vue from "vue";
import dayjs from "dayjs";
import locale_tr from "dayjs/locale/tr";
dayjs.locale(locale_tr);

export default dayjs;

Vue.prototype.$dayjs = dayjs;
