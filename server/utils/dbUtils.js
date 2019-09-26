const User = require('../src/user/model');

exports.isUserExist = async userId => {
  const existingUser = await User.findById(userId);
  if (existingUser) {
    return true;
  }
  return false;
};
