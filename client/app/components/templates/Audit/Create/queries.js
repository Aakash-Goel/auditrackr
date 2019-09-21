/* eslint-disable import/prefer-default-export */

export const requestCreateAudit = args => {
  const data = {
    query: `
      mutation {
        createProject(createProjectInput: {
          auditName: "${args.auditNameVal}",
          name: "${args.projectNameVal}",
          code: ${args.projectIdVal},
          category: "${args.projectCategoryVal}"
        }) {
            auditName
            name
            code
            category
            questionnaires
          }
      }
    `,
  };

  return data;
};
