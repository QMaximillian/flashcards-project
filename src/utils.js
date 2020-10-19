const bcrypt = require("bcrypt")
const sign = require("jsonwebtoken").sign
const knex = require("../knex/knex.js")
const uuidv4 = require("uuid")
const jwt = require("express-jwt")


function verifyPassword(passwordAttempt,hashedPassword) {
    return bcrypt.compare(passwordAttempt, hashedPassword);
};

function createToken(user) {
    return sign(
      {
        sub: user.id,
        email: user.email,
        // role: user.role,
        iss: 'api.flashcards',
        aud: 'api.flashcards',
      },
      process.env.JWT_SECRET,
      { algorithm: 'HS256', expiresIn: '1h'}
    );
  };

  function hashPassword(password) {
    return new Promise((resolve, reject) => {
      // Generate a salt at level 12 strength
      bcrypt.genSalt(12, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
    });
  };

  async function createUser(userData){
    const newUser = await knex('users')
    .insert({
      id: uuidv4(),
      ...userData
    })
    .returning("*")
    .then(r => r[0])

    return newUser
  }

 const checkJwt = jwt({
    secret: process.env.JWT_SECRET,
    audience: 'api.flashcards',
    issuer: 'api.flashcards',
    getToken: req => req.cookies.token,
    algorithms: ['HS256']
  })

function checkNodeEnvironment(environment){
  return process.env.NODE_ENV === environment
}

module.exports = {checkNodeEnvironment, createUser, hashPassword, createToken, verifyPassword, checkJwt}

  