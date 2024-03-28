import dayjs from "dayjs";

export const calculateDateRange = (startDate: any, endDate: any) => {
  const startDateDayjs = dayjs(startDate);
  const endDateMDayjs = dayjs(endDate);

  return Math.ceil(endDateMDayjs.diff(startDateDayjs, "hours") / 24);
};

export const combineDateAndTime = (date: any, time: any) => {
  return dayjs(
    `${dayjs(date || new Date()).format("YYYY-MM-DD")} ${time || "00:00"}`,
    "YYYY-MM-DD HH:mm"
  ).format();
};

export const calculateTimeRange = (startTime: any, endTime: any) => {
  const startTimeDayjs = dayjs(startTime);
  const endTimeDayjs = dayjs(endTime);

  return endTimeDayjs.diff(startTimeDayjs, "minute", true) / 60;
};
