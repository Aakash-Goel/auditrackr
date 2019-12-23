export const requestLoginData = (userEmail, userPassword) => {
  const data = {
    query: `
      query {
        login(email: "${userEmail}", password: "${userPassword}") {
          success
        }
      }
    `,
  };

  return data;
};

export const requestLogOutData = () => {
  const data = {
    query: `
      query {
        logout {
          success
        }
      }
    `,
  };

  return data;
};
