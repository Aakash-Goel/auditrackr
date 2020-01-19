export const requestCreateAudit = args => {
  const data = {
    query: `
      mutation {
        createProject(createProjectInput: {
          auditName: "${args.auditNameVal}",
          name: "${args.projectNameVal}",
          code: ${args.projectIdVal},
          projectDomain: "${args.projectDomainVal}"
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
