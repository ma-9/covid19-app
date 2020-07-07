const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'September',
  'October',
  'November',
  'December',
];

export const generateDateAndMonth = (date, month) => {
  return `${Months[month]} ${date}`;
};

export const pinColorSelector = (confirmed, recovered, deaths) => {
  const GreenZone = 'green';
  const RedZone = 'red';
  const OrangeZone = 'orange';

  if (recovered < confirmed / 2 && deaths < recovered / 2) {
    return GreenZone;
  } else if (recovered > confirmed / 2 && deaths < recovered / 2) {
    return OrangeZone;
  } else {
    return RedZone;
  }
};
