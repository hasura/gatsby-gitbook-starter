export const saPage = ({ href, pathname, search = "", title = "" }) => {
  window.analytics = window.analytics || [];
  window.analytics.page({
    path: pathname,
    url: href,
    ...(!!title && { title }),
    ...(!!search && { search }),
  });
};

export const saTrack = (eventName, properties) => {
  if (typeof eventName !== "string") {
    throw Error("Event Name must be a valid string to track an Event in Segment");
  }
  window.analytics = window.analytics || [];
  window.analytics.track(eventName, properties);
};
