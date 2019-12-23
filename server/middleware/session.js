const jwt = require('jsonwebtoken');
const { isEmpty } = require('lodash');

// constants @TODO: move it to config or more secure place
const TOKEN_SECRET = 'some-token-secret'; // @TODO: need to change this to more secure key
const commonCookieOptions = {
  secure: process.env.NODE_ENV === 'production', // to force https (in prod)
  maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days | ttl in ms (remove this option and cookie will die when browser is closed)
  // signed: true, // if use the secret with cookieParser
  // domain: 'example.com', // set domain | enable it for production
};
const secureCookieOptions = {
  httpOnly: true, // to disable accessing cookie via client side js
  ...commonCookieOptions,
};
const unSecureCookieOptions = {
  // Create cookie which can be read by client js
  httpOnly: false, // to enable accessing cookie via client side js
  ...commonCookieOptions,
};

class Session {
  constructor(request, response) {
    this.request = request;
    this.response = response;
    // users info stored in token
    this.userId = null;
    this.userEmail = null;
    this.userName = null;
    this.userRole = null;

    let cookieObj = {};

    if (isEmpty(request.cookies)) {
      if (!isEmpty(request.headers.cookie)) {
        cookieObj = JSON.parse(request.headers.cookie);
      }
    } else {
      cookieObj = request.cookies;
    }

    const { token } = cookieObj;

    this.verifyToken(token);
  }

  verifyToken(sessionToken) {
    if (!sessionToken || sessionToken === '') {
      return;
    }

    try {
      const decodedToken = jwt.verify(sessionToken, TOKEN_SECRET);
      const {
        userId: id,
        userEmail: email,
        userName: name,
        userRole: role,
      } = decodedToken;
      this.storeUserInfo({ id, email, name, role });
    } catch (error) {
      console.error('Error decoding session token', error); // eslint-disable-line no-console
    }
  }

  updateToken(user) {
    if (!user) {
      return;
    }

    this.storeUserInfo(user);

    const sessionToken = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email,
        userName: user.name,
        userRole: user.role,
      },
      TOKEN_SECRET,
      {
        expiresIn: '7d', // @TODO: need to update this
      }
    );

    this.response.cookie('token', sessionToken, secureCookieOptions);
    this.response.cookie('c_user', user.id, unSecureCookieOptions);
    this.response.cookie('c_role', user.role, unSecureCookieOptions);
  }

  storeUserInfo({ id, email, name, role }) {
    this.userId = id;
    this.userEmail = email;
    this.userName = name;
    this.userRole = role;
  }

  removeToken() {
    this.response.clearCookie('token');
    this.response.clearCookie('c_user');
    this.response.clearCookie('c_role');
  }
}

const sessionMiddleware = (request, response, next) => {
  request.session = new Session(request, response);
  next();
};

module.exports = sessionMiddleware;
