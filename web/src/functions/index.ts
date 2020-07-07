const GoogleAPIKey = 'AIzaSyALuL4qOhKp7JaVvZGgfIqSSmTZa6eXljQ';

export const getDateAndTIme = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${date}/${month}/${year} ${hour}:${minutes}`;
};

export const generateGoogleAPI = () => {
  return GoogleAPIKey;
};
