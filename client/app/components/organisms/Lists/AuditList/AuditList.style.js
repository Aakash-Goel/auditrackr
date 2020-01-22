import { makeStyles } from '@material-ui/core/styles';

import { statusColors } from '../../../../styles/variables';

const auditListStyles = makeStyles(theme => {
  const styles = {
    paperWrapper: {
      width: '100%',
      padding: 0,
    },
    btnViewAll: {
      padding: 0,
    },
    tableRow: {
      '&:nth-child(even)': {
        backgroundColor: `${theme.palette.grey[300]}`,
      },
    },
    statusClosed: {
      color: statusColors.Closed,
    },
    statusComplete: {
      color: statusColors.Complete,
    },
    statusInProgress: {
      color: statusColors.InProgress,
    },
    statusInReview: {
      color: statusColors.InReview,
    },
  };

  return styles;
});

export default auditListStyles;
