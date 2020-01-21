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
  const cellData = [
    { name: data.projectStatus },
    { name: data.projectAuditName },
    { name: '70%' },
    { name: data.createdAt },
    { name: data.projectReviewers.join(', ') },
  ];

  return cellData;
};
