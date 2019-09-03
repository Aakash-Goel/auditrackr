exports.dateToString = date => {
  const newDateISOString = new Date(date).toISOString;
  return newDateISOString;
};
