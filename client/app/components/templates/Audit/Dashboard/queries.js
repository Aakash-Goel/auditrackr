const getProfile = args => {
  const data = {
    query: `
      query {
        getUser(userId: "${args.userId}") {
          name
        }
      }
    `,
  };

  return data;
};

export default getProfile;
