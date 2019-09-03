export const required = {
  required: {
    presence: {
      message: 'This field is required',
    },
  },
};

export const passwordRequired = {
  passwordRequired: {
    presence: {
      message: 'Password is required',
    },
  },
};

export const email = {
  email: {
    email: true,
  },
};

export const passwordValidation = {
  passwordValidation: {
    presence: {
      message: 'Password is required',
    },
    format: {
      pattern: /(?!)/,
      message: value => {
        let failedFormat = '';
        const patterns = {
          passwordAtLeast1Digit: /^.*\d{1,}.*$/,
          passwordAtLeast1LowerCase: /^.*[a-z]{1,}.*$/,
          passwordAtLeast1CapCase: /^.*[A-Z]{1,}.*$/,
        };

        Object.keys(patterns).forEach(pattern => {
          if (!patterns[pattern].test(value)) {
            failedFormat = `${failedFormat + pattern} `;
          }
        });
        if (/\s/g.test(value)) {
          /* istanbul ignore next */
          failedFormat = `${failedFormat} passwordSpacesNotAllowed `;
        }
        /* istanbul ignore next */
        return failedFormat.trim();
      },
    },
    length: {
      minimum: 8,
      maximum: 20,
      tooShort: 'Password is too short',
      tooLong: 'Password is too long',
    },
    equality: {
      attribute: 'name',
      message: 'Should not contain name',
      comparator: (v1, v2) => {
        /* istanbul ignore next */
        if (v2 && Array.isArray(v2)) {
          let result = true;
          for (let i = 0; i < v2.length; i += 1) {
            result = v2[i]
              ? v1.toLowerCase().indexOf(v2[i].toLowerCase()) === -1
              : true; // If first name is present than check if password contains first name
            if (result === false) {
              return result;
            }
          }
          return result;
        }
        return v2 ? v1.toLowerCase().indexOf(v2.toLowerCase()) === -1 : true; // If first name is present than check if password contains first name
      },
    },
  },
};

export const confirmPassword = {
  confirmPassword: {
    presence: {
      message: 'Confirm password is required',
    },
    equality: {
      attribute: 'password',
      message: 'Should be same as password',
    },
    length: {
      minimum: 8,
      maximum: 20,
      tooShort: 'Password is too short',
      tooLong: 'Password is too long',
    },
  },
};

export const emailMessage = {
  emailMessage: {
    presence: {
      message: 'Please enter an email',
    },
  },
};

export const name = {
  name: {
    multiFormat: [
      {
        pattern: /^[a-zA-Z0-9]{1}.*$/,
        message: 'Name should not have special characters',
      },
      {
        pattern: /^[a-zA-Z'’\-\s]*$/,
        message: 'Pattern is not correct',
      },
    ],
    length: {
      minimum: 2,
      tooShort: 'Enter minimum 2 characters',
    },
  },
};
