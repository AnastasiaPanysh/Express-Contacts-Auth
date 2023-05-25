const express = require('express');
const { createUser, AuthorisationUser } = require('../service/user.service');
const { createCookie, createToken } = require('../helper/jwt');

const route = express.Router();

route.post('/registration', async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await createUser(email, pwd);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

route.post('/authorisation', async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await AuthorisationUser(email, pwd);
    const token = createToken(data);

    res.setHeader('authorisation', [createCookie(token)]);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = route;
