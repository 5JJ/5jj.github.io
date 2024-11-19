import { ISOString } from "../types";
import { getDateFormat } from "../utils";

const Period = (props: { startDate: ISOString; endDate?: ISOString }) => {
  const { startDate, endDate } = props;
  // TODO: set date format by locale
  return (
    <div className="text-18">
      <span>{getDateFormat(startDate, "mm.dd.yyyy")}</span>
      <span className="mx-6">-</span>
      {!!endDate && <span>{getDateFormat(endDate, "mm.dd.yyyy")}</span>}
    </div>
  );
};

export default Period;
