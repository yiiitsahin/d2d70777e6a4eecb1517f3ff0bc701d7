import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/tr-TR";

export { locale };

export default ElementUI;

Vue.use(ElementUI, { locale });
