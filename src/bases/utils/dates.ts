import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

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

export const formatTimeToUTC = (
  time: string | number | Date | dayjs.Dayjs | null | undefined
) => {
  // 将输入时间转换为 Day.js 对象，并将其视为 UTC 时间
  const inputDateTime = dayjs(time).utc();

  // 将 UTC 时间转换为特定时区的时间
  const outputDateTime = inputDateTime.tz("Asia/Shanghai");
  const outputTime = outputDateTime.format("YYYY-MM-DDTHH:mm:ssZ");
  return outputTime;
};
