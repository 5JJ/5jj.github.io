import React from "react";
import eventHanlders from "./utils/eventHandler";
import getWindow from "./utils/getWindow";
import resizeObserver from "./utils/resizeObserver";

type SliderParams = {
  renderSlider: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

class Slider {
  el: HTMLElement | null = null;
  wrapperEl: HTMLElement | null = null;
  width: number = 0;
  height: number = 0;
  size: number = 0;
  initialized: boolean = false;
  eventListeners: Record<string, ((...args: any[]) => void)[] | undefined> = {};
  private renderSlider: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  > | null = null;

  constructor(params: SliderParams) {
    const slider = this;
    const { renderSlider } = params;

    Object.assign(slider, {
      renderSlider,
    });

    resizeObserver(
      slider,
      eventHanlders.on.bind(slider),
      eventHanlders.emit.bind(slider)
    );

    return slider;
  }

  destory() {
    const slider = this;
    slider.initialized = false;

    eventHanlders.emit("destory");
  }

  init(el: HTMLElement, wrapperEl: HTMLElement) {
    const slider = this;
    if (slider.initialized) return slider;
    if (!el) return slider;

    slider.el = el;
    slider.wrapperEl = wrapperEl;

    slider.updateSize();

    slider.initialized = true;

    eventHanlders.emit.call(slider, "init");
    eventHanlders.on.call(slider, "resize", function () {
      slider.updateSize();
      slider.renderSlider?.((prev) => ({ ...prev, size: slider.size }));
    });

    return slider;
  }

  startTransition() {
    const slider = this;
    slider.setTransitionDuration(300);
  }

  endTransition() {
    const slider = this;

    setTimeout(() => {
      slider.setTransitionDuration(0);
    }, 100);
  }

  setTransitionDuration(duration: Number) {
    const slider = this;
    if (!slider.wrapperEl) return;

    slider.wrapperEl.style.transitionDuration = `${duration}ms`;
  }

  updateSize() {
    function elementStyle(el: HTMLElement, prop: string) {
      const window = getWindow();
      return window.getComputedStyle(el, null).getPropertyValue(prop);
    }

    const slider = this;
    const el = slider.el;
    let width, height;

    if (!el) return;

    width = el.clientWidth ?? 0;
    height = el.clientHeight ?? 0;

    if (width === 0) return;

    width =
      width -
      parseInt(elementStyle(el, "padding-left") || "0", 10) -
      parseInt(elementStyle(el, "padding-right") || "0", 10);
    height =
      height -
      parseInt(elementStyle(el, "padding-top") || "0", 10) -
      parseInt(elementStyle(el, "padding-bottom") || "0", 10);

    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;

    Object.assign(slider, {
      width,
      height,
      size: width,
    });
  }
}

export default Slider;
