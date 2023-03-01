export const BACKEND_URL = 'http://localhost:8000';

export const THEME_URL = {
  url: 'api/themes',
  method: 'get',
};

export const UPDATE_THEME = {
  url: 'api/themes',
  method: 'put',
};

export const EVENTS_URL = {
  url: 'api/events',
  method: 'get',
};

export const EVENT_BY_ID = eventId => ({
  url: `api/events/${eventId}`,
  method: 'get',
});

export const UPDATE_EVENT = eventId => ({
  url: `api/events/${eventId}`,
  method: 'patch',
});
