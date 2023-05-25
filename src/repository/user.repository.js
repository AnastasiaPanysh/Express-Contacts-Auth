const { User, ObjectId } = require('../db');

const getUserByEmailDB = async email => {
  return await User.findOne({ email: email });
};

const createUserDB = async (email, hashPwd) => {
  const record = await User.collection.insertOne({ email: email, pwd: hashPwd });
  return { _id: record.insertedId, email, pwd: hashPwd };
};

module.exports = { getUserByEmailDB, createUserDB };
