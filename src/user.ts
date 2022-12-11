export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const supportsTouchEvents = () => window && "ontouchstart" in window;

export const prefersDarkColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const prefersLightColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

export const prefersReducedMotion = () =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
