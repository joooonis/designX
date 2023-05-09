const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE';

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

export const push = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT, params));
};
