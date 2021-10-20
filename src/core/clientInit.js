import store from "@/store/";

export default function Init() {
  store.dispatch("reservations/FetchLocalStorageValues");
  store.dispatch("hotels/GetAll");
}
