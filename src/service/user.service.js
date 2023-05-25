const bcrypt = require('bcrypt');
const { getUserByEmailDB, createUserDB } = require('../repository/user.repository');

const createUser = async (email, pwd) => {
  const findUser = await getUserByEmailDB(email);
  if (findUser) throw new Error('user with such email already exist');
  const hashPwd = await bcrypt.hash(pwd, 10);
  const createdUser = await createUserDB(email, hashPwd);
  return createdUser;
};

const AuthorisationUser = async (email, pwd) => {
  const findUser = await getUserByEmailDB(email);
  if (!findUser) throw new Error('user with such email not found');
  const hashedPassword = findUser.pwd;
  if (!(await bcrypt.compare(pwd, hashedPassword))) throw new Error('incorrect password');
  return findUser;
};

module.exports = { createUser, AuthorisationUser };
