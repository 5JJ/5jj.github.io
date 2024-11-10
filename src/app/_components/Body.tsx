"use client";

import classNames from "classnames";
import { PropsWithChildren } from "react";
import { useTheme } from "./theme/ThemeContext";

const Body = (props: PropsWithChildren<{ className?: string }>) => {
  const { children, className } = props;

  const { theme } = useTheme();

  return (
    <body
      className={classNames(
        className,
        theme &&
          `bg-${theme}-bg_from bg-gradient-to-b from-${theme}-bg_from to-${theme}-bg_to`
      )}
    >
      {children}
    </body>
  );
};

export default Body;
