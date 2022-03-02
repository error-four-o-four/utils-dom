export const detectDeviceType = () => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	? 'Mobile'
	: 'Desktop';
}
export const supportsTouchEvents = () => window && 'ontouchstart' in window;

export const prefersDarkColorScheme = () => window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
export const prefersLightColorScheme = () => window && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
export const prefersReducedMotion = () => window && window.matchMedia &&  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const httpGet = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};

export const triggerEvent = (el, eventType, detail) => el.dispatchEvent(new CustomEvent(eventType, { detail }));