import { extend } from "./utils";

const ssrWindow = {
  document: null,
  navigator: {
    userAgent: "",
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {},
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  ResizeObserver() {},
  requestAnimationFrame(callback: () => void) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id: number) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  },
};

function getWindow() {
  const win: Window & typeof globalThis =
    typeof window !== "undefined" ? window : ({} as Window & typeof globalThis);
  extend(win, ssrWindow);
  return win;
}

export default getWindow;
