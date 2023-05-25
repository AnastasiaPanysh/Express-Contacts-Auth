const jwt = require('jsonwebtoken');

const jwt_decode = require('jwt-decode');

const createToken = user => {
  const secret = '12345Abc';
  const dataStoredInToken = { _id: user._id };
  return jwt.sign(dataStoredInToken, secret);
};

const createCookie = token => `Bearer ${token}`;

module.exports = { createToken, createCookie };
