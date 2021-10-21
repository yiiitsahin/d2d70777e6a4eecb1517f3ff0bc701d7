import dayjs from "dayjs";

function getDayDiff(end, start = dayjs()) {
  return dayjs(end).diff(dayjs(start), "day");
}

export { getDayDiff };
