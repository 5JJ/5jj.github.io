"use client";

import classNames from "classnames";
import { ChangeEvent, useCallback, useState } from "react";

type RadioGroupProps<T extends readonly string[]> = {
  list: T;
  defaultValue: T[number];
  name: string;
  onChange?: (item: T[number]) => void;
};

const RadioGroup = <T extends readonly string[]>(props: RadioGroupProps<T>) => {
  const { list, name, defaultValue, onChange } = props;

  const [checkedItem, setCheckedItem] = useState<T[number]>(defaultValue);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const item = e.currentTarget.value;

      setCheckedItem(item);
      onChange && onChange(item);
    },
    [onChange]
  );

  return (
    <div className="flex text-white">
      {list.map((item) => (
        <div
          key={item}
          className={classNames(
            "first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md overflow-hidden",
            {
              "bg-main": checkedItem === item,
              "bg-sub_1": checkedItem !== item,
            }
          )}
        >
          <label
            htmlFor={`${name}_${item}`}
            className={classNames("inline-block p-5 checked:bg-blue-50", {
              "cursor-pointer": checkedItem !== item,
            })}
          >
            {item}
          </label>
          <input
            className="hide"
            type="radio"
            name={name}
            value={item}
            checked={checkedItem === item}
            onChange={handleChange}
            id={`${name}_${item}`}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
