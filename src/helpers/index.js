import dayjs from "dayjs";

function getDayDiff(start, end) {
  return dayjs(end).diff(dayjs(start), "day");
}

export { getDayDiff };
