import { month } from '../../constants/strings';

const getDate = (datetime, timeZone) => {
  let date = new Date(datetime);
  date = date.toLocaleString('en-US', {
    timeZone,
    timeZoneName: 'short',
    hour12: false,
  });
  const dateArray = date.split('/');
  return `${dateArray[1]} ${month[dateArray[0] - 1]} ${dateArray[2]}`;
};

export default getDate;
