const getDate = (datetime, timeZone) => {
  const date = new Date(datetime);
  return date.toLocaleString('en-US', { timeZone });
};

export default getDate;
