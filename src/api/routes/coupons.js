import API from "@/api";

const coupons = "/coupons";
const couponDetail = `${coupons}?code`;

export function getCoupons() {
  return API.get(`${coupons}`);
}

export function getCoupon(code) {
  return API.get(`${couponDetail}=${code}`);
}
