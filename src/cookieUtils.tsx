const getMidnightInNYC = () => {
  const now = new Date();
  const midnightNYC = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0, 0
  );
  midnightNYC.setHours(midnightNYC.getHours() - 4); 
  return midnightNYC;
};

export const setCookie = (nombre, valor) => {
  const midnightNYC = getMidnightInNYC();
  const expiracion = `expires=${midnightNYC.toUTCString()}`;
  document.cookie = `${nombre}=${valor}; ${expiracion}; path=/`;
};

export const getCookie = (nombre) => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === nombre) {
      return value;
    }
  }
  return null;
};

export const delCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}