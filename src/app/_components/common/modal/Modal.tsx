"use client";

import { HtmlHTMLAttributes, PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

import classNames from "classnames";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import Portal from "./Portal";

export type ModalProps = PropsWithChildren<
  {
    open: boolean;
    dimmed?: boolean;
    bodyScrollable?: boolean;
    onClick?: () => void;
    targetId?: string;
  } & Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">
>;

const Modal = (props: ModalProps) => {
  const {
    open,
    children,
    className,
    dimmed,
    onClick,
    targetId,
    bodyScrollable = true,
  } = props;

  useLockBodyScroll(bodyScrollable && open);

  if (!open) return null;

  return (
    <Portal targetId={targetId ?? "container"}>
      <div
        className={classNames(
          "fixed bottom-0 left-0 right-0 top-0 z-[1200] flex items-center justify-center",
          className
        )}
      >
        {children}
        <div
          className={classNames("absolute w-full h-full z-[-10]", {
            "bg-black/50": dimmed,
          })}
          onClick={onClick}
        />
      </div>
    </Portal>
  );
};

export default Modal;
