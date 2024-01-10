// src/redux/actions.js

export const setClientInfo = (clientId, clientLogoUrl, userId, username) => ({
    type: 'SET_CLIENT_INFO',
    payload: { clientId, clientLogoUrl, userId, username },
  });
  