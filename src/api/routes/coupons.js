import API from "@/api";

const coupons = "/coupons";
const couponDetail = `${coupons}?code`;

export function getCoupons() {
  return API.get(`${coupons}`);
}

export function getCoupon(id) {
  return API.get(`${couponDetail}=${id}`);
}
