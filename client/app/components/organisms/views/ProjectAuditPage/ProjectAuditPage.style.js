const projectAuditPageStyles = theme => ({
  // paperRoot: {
  //   ...theme.mixins.gutters(),
  //   position: 'relative',
  //   overflow: 'hidden',
  //   transition: `box-shadow .25s, -webkit-box-shadow .25s`,
  //   color: theme.palette.common.black,
  //   padding: theme.spacing(4), // 32px
  // },
  stepperRoot: {
    padding: 0,
  },
  stepButtonRoot: {
    textTransform: 'uppercase',
  },
  stepsContentItem: {
    paddingTop: 0,

    '&$selectedContentItem': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      '&:hover,&:focus': {
        backgroundColor: 'transparent',
      },

      '& $stepsContentButton': {
        fontWeight: 500,
      },
    },
  },
  stepsContentButton: {
    '&:hover,&:focus': {
      color: theme.palette.primary.main,
      boxShadow: 'none',
    },
  },
  selectedContentItem: {
    color: theme.palette.primary.main,
  },
});

export default projectAuditPageStyles;
