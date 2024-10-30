"use client";

import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export type PopupSliderItemProps = PropsWithChildren<
  Pick<HTMLAttributes<HTMLElement>, "style">
>;

const PopupSliderItem = forwardRef(
  (props: PopupSliderItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, ...rest } = props;
    const Tag = "div";

    return (
      <Tag
        {...rest}
        ref={ref}
        className="flex w-full items-center justify-center relative shrink-0"
      >
        {children}
      </Tag>
    );
  }
);

PopupSliderItem.displayName = "PopupSliderItem";

export default PopupSliderItem;
