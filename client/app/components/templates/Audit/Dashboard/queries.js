const getProfile = args => {
  const data = {
    query: `
      query {
        getUser(userId: "${args.userId}") {
          name
          email
          avatar
          projects {
            _id
            projectAuditName
            projectName
            projectCode
            projectDomain
            projectStatus
            projectAdmins
            projectAuditors
            projectReviewers
            createdBy {
              email
            }
            createdAt
            updatedAt
          }
        }
      }
    `,
  };

  return data;
};

export default getProfile;
