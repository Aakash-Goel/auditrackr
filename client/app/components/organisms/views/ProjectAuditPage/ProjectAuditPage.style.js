const projectAuditPageStyles = theme => ({
  templateWrapper: {
    marginTop: 0,
  },
  templateHeadingWrapper: {
    float: 'left',
  },
  templateBtnWrapper: {
    float: 'right',
  },
  btnAdd: {
    marginLeft: theme.spacing(2),
  },
  paperRoot: {
    // ...theme.mixins.gutters(),
    position: 'relative',
    overflow: 'hidden',
    // transition: `box-shadow .25s, -webkit-box-shadow .25s`,
    // color: theme.palette.common.black,
    padding: 0, // 32px
  },
  stepsWrapper: {
    padding: theme.spacing(2),
  },
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
  categoryWrapper: {
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(2),
  },
  qnaWrapper: {
    padding: theme.spacing(2),

    '& p': {
      marginTop: 0,
    },
  },
  qnaOptionWrapper: {
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(2),
  },
  optionWrapper: {
    marginBottom: theme.spacing(3),
  },
  formInputWrapper: {
    marginBottom: theme.spacing(2),

    '& p': {
      marginTop: theme.spacing(1),
    },
  },
  btnAddReference: {
    padding: 0,
  },
});

export default projectAuditPageStyles;
