import { useEffect, useLayoutEffect, useRef } from "react";

const useLockBodyScroll = (condition: boolean | (() => boolean)) => {
  const scrollbarWidth = useRef<number>(0);
  const currentCondition =
    typeof condition === "function" ? condition() : condition;

  const pick = <T extends Record<string, any>>(
    obj: T,
    keys: readonly (keyof T)[]
  ) => {
    return keys.reduce<Pick<T, (typeof keys)[number]>>((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {} as Pick<T, (typeof keys)[number]>);
  };

  const setStyleToElement = <T extends Record<any, any>>(
    element: HTMLElement,
    styles: T
  ) => {
    Object.keys(styles).forEach((styleName) => {
      const name = styleName as keyof T;
      (<any>element.style)[styleName] = styles[name];
    });
  };

  const removePxUnitFromStyle = (style: string): number => {
    const number = Number(style.slice(0, -2));
    if (isNaN(number)) {
      return 0;
    }
    return number;
  };

  useLayoutEffect(() => {
    const scrollBar = window.innerWidth - document.body.offsetWidth;
    scrollbarWidth.current = scrollBar;
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const footer = document.body.getElementsByTagName("footer")[0];
    if (!footer) return;

    const originalBodyStyles = pick(getComputedStyle(document.body), [
      "overflow",
      "paddingRight",
    ]);
    const originalFooterStyles = pick(getComputedStyle(footer), [
      "marginRight",
      "paddingRight",
    ]);

    if (currentCondition) {
      setStyleToElement(document.body, {
        overflow: "hidden",
        paddingRight: `${scrollbarWidth.current}px`,
      });
      setStyleToElement(footer, {
        marginRight: `${scrollbarWidth.current * -1}px`,
        paddingRight: `${
          scrollbarWidth.current +
          removePxUnitFromStyle(originalFooterStyles.paddingRight)
        }px`,
      });
    }

    return () => {
      if (currentCondition) {
        setStyleToElement(document.body, originalBodyStyles);
        setStyleToElement(footer, originalFooterStyles);
      }
    };
  }, [currentCondition]);
};

export default useLockBodyScroll;
