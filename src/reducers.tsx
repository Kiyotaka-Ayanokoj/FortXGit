import { setCookie, getCookie } from './actions';

const initialState = {
  lang: localStorage.getItem('lang') || userlang,
  projectName: 'FortX',
  cookieValue: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return { ...state, lang: action.lang };

    case 'GET_COOKIE':
      const cookieValue = getCookie(action.name);
      return { ...state, cookieValue };

    case 'SET_COOKIE':
      setCookie(action.name, action.value, action.expirationHours);
      return state;

    default:
      return state;
  }
};

export default rootReducer;
