import dayjs from 'dayjs';

export const createAuditHeadData = () => {
  const headData = [
    { name: 'STATUS' },
    { name: 'AUDIT' },
    { name: 'PROGRESS' },
    { name: 'CREATED ON' },
    { name: 'REVIEWER' },
  ];

  return headData;
};

export const createAuditColumnsData = data => {
  const parseDate = parseInt(data.createdAt); // this is required since api returns in string format
  const convertToDateString = new Date(parseDate).toString(); // this is required to convert into valid date format

  const cellData = [
    { name: data.projectStatus, color: 'status' },
    { name: data.projectAuditName },
    { name: '70%' },
    { name: dayjs(convertToDateString).format('MMM D, YYYY') },
    { name: data.projectReviewers.join(', ') },
  ];

  return cellData;
};

export const createColorPrefix = (identifier, identifierValue) => {
  let colorPrefix = '';
  if (identifier === 'status') {
    colorPrefix = identifierValue;
  }

  return colorPrefix;
};
