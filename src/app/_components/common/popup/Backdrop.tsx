"use client";

import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import classNames from "classnames";

export type BackdropProps = {
  open: boolean;
  dimmed?: boolean;
  onClick?: () => void;
  targetId?: string;
} & Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

const Backdrop = (props: PropsWithChildren<BackdropProps>) => {
  const { open, children, className, dimmed = true, onClick, targetId } = props;

  if (!open) return null;

  return createPortal(
    <div
      className={classNames(
        "fixed bottom-0 left-0 right-0 top-0 z-[1200] flex items-center justify-center",
        {
          "bg-black/50": dimmed,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>,
    document.getElementById(targetId ?? "container")!
  );
};

export default Backdrop;
