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
          _id
        }
      }
    `,
  };

  return data;
};

export const requestCreateQuestionnaireSet = args => {
  const data = {
    query: `
      mutation {
        createQuestionnaireSet(projectId: "${args.projectId}") {
          _id
        }
      }
    `,
  };

  return data;
};

export const getProjCategories = () => {
  const data = {
    query: `
      query {
        getProjectCategories {
          name
          value
        }
      }
    `,
  };

  return data;
};
