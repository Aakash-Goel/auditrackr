/* eslint-disable import/prefer-default-export */

export const requestSignUpData = args => {
  const { userName, userEmail, userPassword, userAgreeTerms } = args;

  const data = {
    query: `
      mutation {
        createUser(userInput: {name: "${userName}", email: "${userEmail}", password: "${userPassword}", agreeTerms: ${userAgreeTerms}}) {
          _id
          name
          email
        }
      }
    `,
  };

  return data;
};
