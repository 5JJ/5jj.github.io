import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";

export type ButtonProps = PropsWithChildren<
  {
    Icon?: ReactElement;
    fontColor: string;
    bgColor: string;
    buttonProps?: Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "onClick" | "disabled"
    >;
  } & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "disabled">
>;
