import { useMemo } from "react";
import type { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { children, onClick, buttonProps, Icon, disabled, bgColor, fontColor } =
    props;

  const style = useMemo(() => {
    return { backgroundColor: bgColor, color: fontColor };
  }, [bgColor, fontColor]);

  return (
    <button
      onClick={onClick}
      {...buttonProps}
      disabled={disabled}
      className="rounded-10 pb-3 pt-3 pr-8 pl-8 hover:brightness-75 flex items-center justify-center overflow-hidden"
      style={style}
    >
      {!!Icon && Icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
