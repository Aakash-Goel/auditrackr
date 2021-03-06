/**
 * middleware/auth.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where token validation happens
 *
 */

/**
 * Not using anymore
 * Instead using `session` middleware
 *
 */

// 'use strict';

// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const authHeader = req.get('Authorization');
//   if (!authHeader) {
//     req.isAuth = false;
//     return next();
//   }
//   const token = authHeader.split(' ')[1]; // Authorization value: Bearer some-token-number
//   if (!token || token === '') {
//     req.isAuth = false;
//     return next();
//   }

//   let decodedToken;
//   try {
//     decodedToken = jwt.verify(token, 'somesecretkey');
//   } catch (err) {
//     req.isAuth = false;
//     return next();
//   }

//   if (!decodedToken) {
//     req.isAuth = false;
//     return next();
//   }

//   req.isAuth = true;
//   req.user = decodedToken;
//   return next();
// };
