/* eslint-disable import/prefer-default-export */

export const requestProjectDetailsById = args => {
  const data = {
    query: `
      query {
        getProjectById(projectId: "${args.projectId}") {
          _id
          auditName
          name
          code
          category
          createdAt
          createdBy {
            email
            name
          }
          lastUpdatedAt
          questionnaire {
            _id
            questions {
              question
              shortName
              definition
              recommendation
              inOut
              mandatory
              references
              assessmentType
              assessmentResult
              priority
              notes
              points
              category
            }
          }
        }
      }
    `,
  };

  return data;
};
