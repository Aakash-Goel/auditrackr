export const requestCreateAudit = args => {
  const data = {
    query: `
      mutation {
        createProject(projectData: {
          projectAuditName: "${args.projectAuditNameVal}",
          projectName: "${args.projectNameVal}",
          projectCode: ${args.projectCodeVal},
          projectDomain: "${args.projectDomainVal}",
          projectReviewers: [${args.projectReviewersVal
            .map(reviewer => `"${reviewer}"`)
            .join(',')}]
        }) {
          _id
        }
      }
    `,
  };

  return data;
};

export const getProjDomains = () => {
  const data = {
    query: `
      query {
        getProjectDomains {
          name
          value
        }
      }
    `,
  };

  return data;
};
