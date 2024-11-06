import dayjs from "dayjs";
import { DATE_FORMAT } from "@utils/constants/constants";

// Format date
export const formatDate = (dateFormat, typeFormat = DATE_FORMAT.DATE) => {
  if (!dateFormat) return null;
  return dayjs(new Date(dateFormat)).format(typeFormat);
};
