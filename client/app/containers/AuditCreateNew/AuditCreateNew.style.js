const auditCreateNewStyles = theme => ({
  contentWrapperBefore: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100%',
    height: '186px',
    transition: '.3s ease all',
    backgroundColor: theme.palette.custom.brand,
  },
  contentWrapper: {
    padding: theme.spacing.unit * 3,
    color: '#fff',
  },
});

export default auditCreateNewStyles;
