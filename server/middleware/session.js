const jwt = require('jsonwebtoken');

const TOKEN_SECRET = 'some-token-secret'; // @TODO: need to change this to more secure key

class Session {
  constructor(request, response) {
    this.request = request;
    this.response = response;
    // users info stored in token
    this.userId = null;
    this.userEmail = null;
    this.userName = null;
    this.userRole = null;

    const { token } = request.cookies;
    this.setUserFromToken(token);
  }

  setUserFromToken(sessionToken) {
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

    const cookieOptions = {
      httpOnly: true, // to disable accessing cookie via client side js
      secure: process.env.NODE_ENV === 'production', // to force https (if use it)
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days | ttl in ms (remove this option and cookie will die when browser is closed)
      // signed: true, // if use the secret with cookieParser
      // domain: 'example.com', // set domain | enable it for production
    };

    this.response.cookie('token', sessionToken, cookieOptions);
  }

  storeUserInfo({ id, email, name, role }) {
    this.userId = id;
    this.userEmail = email;
    this.userName = name;
    this.userRole = role;
  }

  removeToken() {
    this.response.clearCookie('token');
  }
}

const sessionMiddleware = (request, response, next) => {
  request.session = new Session(request, response);
  next();
};

module.exports = sessionMiddleware;
