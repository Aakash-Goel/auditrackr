/* eslint-disable import/prefer-default-export */

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
