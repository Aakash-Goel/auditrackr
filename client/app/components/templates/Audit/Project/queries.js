/* eslint-disable import/prefer-default-export */

export const requestProjectDetailsById = args => {
  const data = {
    query: `
      query {
        getProjectById(projectId: "${args.projectId}") {
          _id
          projectAuditName
          projectName
          projectCode
          projectDomain
          projectStatus
          projectAdmins
          projectAuditors
          projectReviewers
          createdAt
          createdBy {
            email
            name
          }
          projectQuestionnaires {
            _id
            status
            category
            questions {
              _id
              question
              questionName
              answer
              definition
              recommendation
              inOut
              mandatory
              references
              assessmentType
              assessmentResult
              priority
              comments
              points
              status
              updatedAt
            }
          }
        }
      }
    `,
  };

  return data;
};
