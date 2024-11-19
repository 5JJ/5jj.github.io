import { ISOString } from "./types";

export const getDateFormat = (dateStr: ISOString, format = "yyyy.mm.dd") => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let str = format.replace(/yyyy/, year.toString());
  str = str.replace(/mm/, month.toString().padStart(2, "0"));
  str = str.replace(/dd/, day.toString().padStart(2, "0"));

  return str;
};
