// reducers.js
const initialState = {
  lang: localStorage.getItem('lang') || userlang,
  projectName: 'FortX',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return { ...state, lang: action.lang };
    default:
      return state;
  }
};

export default rootReducer;
