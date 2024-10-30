import getWindow from "./getWindow";
import type Slider from "../slider";

const resizeObserver = (
  slider: Slider,
  on: (eventName: string, handler: () => void) => void,
  emit: (eventName: string) => void
) => {
  const window = getWindow();
  let observer: ResizeObserver | null = null;
  let animationFrame: number | null = null;

  const resizeHandler = () => {
    if (!slider || !slider.el || !slider.initialized) return;

    emit("resize");
  };

  const createResizeObserver = () => {
    if (!slider || !slider.el || !slider.initialized) return;

    observer = new ResizeObserver((entries) => {
      animationFrame = window.requestAnimationFrame(() => {
        const { size } = slider;

        let newSize = size;

        entries.forEach(({ contentBoxSize, contentRect, target }) => {
          if (target && target !== slider.el) return;
          newSize = contentRect
            ? contentRect.width
            : (contentBoxSize[0] || contentBoxSize).inlineSize;
        });

        if (newSize !== size) {
          resizeHandler();
        }
      });
    });

    observer.observe(slider.el);
  };

  const removeObserver = () => {
    if (typeof animationFrame === "number") {
      window.cancelAnimationFrame(animationFrame);
    }

    if (observer && slider.el) {
      observer.unobserve(slider.el);
      observer = null;
    }
  };

  on("init", () => {
    if (typeof window.ResizeObserver !== "undefined") {
      createResizeObserver();
    }
  });

  on("destory", () => {
    removeObserver();
  });
};

export default resizeObserver;
