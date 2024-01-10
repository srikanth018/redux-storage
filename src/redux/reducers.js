// src/redux/reducers.js

const initialState = {
    clientId: null,
    clientLogoUrl: null,
    userId: null,
    username: null,
  };
  
  const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CLIENT_INFO':
        return {
          ...state,
          clientId: action.payload.clientId,
          clientLogoUrl: action.payload.clientLogoUrl,
          userId: action.payload.userId,
          username: action.payload.username,
        };
      default:
        return state;
    }
  };
  
  export default clientReducer;
  