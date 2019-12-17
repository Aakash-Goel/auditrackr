const projectAuditPageStyles = theme => ({
  paperRoot: {
    ...theme.mixins.gutters(),
    position: 'relative',
    overflow: 'hidden',
    transition: `box-shadow .25s, -webkit-box-shadow .25s`,
    color: theme.palette.common.black,
    padding: theme.spacing(4), // 32px
  },
});

export default projectAuditPageStyles;
