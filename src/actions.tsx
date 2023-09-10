export const changeLang = (lang) => ({
  type: 'CHANGE_LANG',
  lang,
});

export const getCookie = (name) => ({
  type: 'GET_COOKIE',
  name,
});

export const setCookie = (name, value, expirationHours) => ({
  type: 'SET_COOKIE',
  name,
  value,
  expirationHours,￼￼
});