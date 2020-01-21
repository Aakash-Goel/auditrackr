import { textAlign } from '../../../../styles/variables';

const auditListStyles = () => ({
  paperWrapper: {
    width: '100%',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    flexGrow: '1',
  },
  infoWrapper: {
    textAlign: textAlign.center,
  },
  tableHeadingWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  table: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableRow: {
    display: 'table-row',
  },
  tableHead: {
    display: 'table-cell',
    // padding: '1em',
  },
  tableCell: {
    display: 'table-cell',
    // padding: '1em',
  },
});

export default auditListStyles;
