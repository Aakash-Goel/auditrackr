import validate from 'validate.js';

// custom validators
validate.validators.multiFormat = (value, options, ...args) => {
  if (!Array.isArray(options)) {
    throw new TypeError(`${options} should be an Array`);
  }
  const getOptionWithErrorMessage = option =>
    validate.validators.format(value, option, ...args);
  const optionWithErrorMessage = options.find(
    option => getOptionWithErrorMessage(option) != null
  );
  if (optionWithErrorMessage) {
    return getOptionWithErrorMessage(optionWithErrorMessage);
  }
  return optionWithErrorMessage;
};

// set messages
const setMessage = (key, withCarat = true, optionArr, caratAtLast = false) => {
  // let labelText = LabelsUtil.getLabel(getFormLabelsInfo(), key, optionArr);
  let labelText;

  if (!labelText) {
    labelText = key;
  }
  let finalLabel = withCarat ? `^${labelText}` : labelText;

  if (caratAtLast) {
    finalLabel = `${labelText}^`;
  }
  return finalLabel;
};

export const required = {
  required: {
    presence: {
      message: setMessage('This field is required.'),
    },
  },
};

// @TODO: to modify or removed
export const email = {
  email: {
    presence: {
      allowEmpty: false,
      message: setMessage('Please enter an email.'),
    },
    email: {
      message: setMessage('Please enter a valid email.'),
    },
  },
};

// @TODO: to modify or removed
export const password = {
  password: {
    presence: {
      allowEmpty: false,
      message: setMessage('Please enter a password.'),
    },
    // format: {
    //   pattern: /(?!)/,
    //   message: value => {
    //     let failedFormat = '';
    //     const patterns = {
    //       passwordAtLeast1Digit: /^.*\d{1,}.*$/,
    //       passwordAtLeast1LowerCase: /^.*[a-z]{1,}.*$/,
    //       passwordAtLeast1CapCase: /^.*[A-Z]{1,}.*$/,
    //     };

    //     Object.keys(patterns).forEach(pattern => {
    //       if (!patterns[pattern].test(value)) {
    //         failedFormat = `${failedFormat + pattern} `;
    //       }
    //     });
    //     if (/\s/g.test(value)) {
    //       /* istanbul ignore next */
    //       failedFormat = `${failedFormat} passwordSpacesNotAllowed `;
    //     }
    //     /* istanbul ignore next */
    //     return failedFormat.trim();
    //   },
    // },
    length: {
      minimum: 8,
      maximum: 20,
      tooShort: setMessage('Password should contain minimum 8 characters.'),
      tooLong: setMessage(
        'Password should not contain more than 20 characters.'
      ),
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

// @TODO: to modify or removed
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

export const name = {
  name: {
    presence: {
      allowEmpty: false,
      message: setMessage('Please enter a valid name.'),
    },
    multiFormat: [
      {
        pattern: /^[a-zA-Z0-9]{1}.*$/,
        message: setMessage('Cannot start with special characters.'),
      },
      {
        pattern: /^[a-zA-Z'’\-\s]*$/,
        message: setMessage(
          'Please enter letters, apostrophes, hyphens, and spaces only.'
        ),
      },
    ],
    length: {
      minimum: 3,
      tooShort: setMessage('Please enter at least 3 characters.'),
    },
  },
};

export const number = {
  number: {
    presence: {
      allowEmpty: false,
      message: setMessage('This field is required.'),
    },
    numericality: {
      message: setMessage('Please enter number only.'),
    },
    format: {
      pattern: /^[0-9]*[1-9]+[0-9]*$/,
      message: setMessage('Please enter a valid number.'),
    },
  },
};

export const category = {
  category: {
    presence: {
      allowEmpty: false,
      message: setMessage('Please select a category.'),
    },
  },
};

export const domain = {
  domain: {
    presence: {
      allowEmpty: false,
      message: setMessage('Please select a domain.'),
    },
  },
};
