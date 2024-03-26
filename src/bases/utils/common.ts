import dayjs from "dayjs";

const bookingEngineUrl = process.env.REACT_APP_BOOKING_ENGINE_URL;

export const getFullUrl = (path: string) => {
  return `${bookingEngineUrl}/#${path}`;
};

export const getPublicUrl = (path: string) =>
  `${process.env.PUBLIC_URL}/${path}`;

export const getGoogleMapLink = (value?: string) => {
  if (!value) return;
  return `http://maps.google.com/?q=${value}`;
};

export const findNullUndefinedKeys = (obj: any, unCheck: [string]) => {
  const nullUndefinedKeys: any = [];

  const checkKeys = (currentObj: any, currentPath = "") => {
    for (const key in currentObj) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      if (!unCheck.includes(key)) {
        if (currentObj[key] === null || currentObj[key] === undefined) {
          nullUndefinedKeys.push(newPath);
        } else if (typeof currentObj[key] === "object") {
          checkKeys(currentObj[key], newPath);
        }
      }
    }
  };

  checkKeys(obj);
  return nullUndefinedKeys;
};

export const formatDateTime = (date: any) => {
  return dayjs(date).format("DD MMM YY, H:mm");
};

export const safeParse = <T>(
  func: (param: string) => any,
  value?: string | null
): T => {
  if (value && typeof value === "object") return value as T;

  if (!value?.length) return {} as T;

  try {
    return func(value) as T;
  } catch {
    return {} as T;
  }
};

export const safeJSONParse = <T>(value?: string | null): T => {
  return safeParse<T>(JSON.parse, value);
};

export const getCurrPageStatus = (status: string) => {
  return status?.split(".") || [];
};

export const getFirstAndLastNameByFullName = (fullName: string) => {
  const words = fullName.split(" ");
  const firstName = words[0];
  const lastName = words.slice(1).join(" ");

  return [firstName, lastName];
};

export const getPostalCodeByFullAddress = (fullAddress: string) => {
  const words = fullAddress.split(" ");
  return words[words.length - 1];
};

export const isPhoneValid = (phone: string) =>
  new RegExp(/^[+]?[(]?[0-9]{3}[(]?[0-9]{7,11}$/).test(phone);
