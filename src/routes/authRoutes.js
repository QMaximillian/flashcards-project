const express = require("express");
const jwt_decode = require("jwt-decode");

const knex = require("../../knex/knex.js");
const {
  createUser,
  verifyPassword,
  createToken,
  hashPassword,
} = require("../utils.js");

const router = express.Router();

/* Local Login */
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });

    const user = await knex("users").where({ email }).first();
    console.log({ user });
    if (!user) {
      return res.status(403).json({
        message: "Wrong email or password",
      });
    }

    const passwordValid = await verifyPassword(password, user.password);
    console.log({ passwordValid });

    if (passwordValid) {
      const { password, updated_at, created_at, ...rest } = user;
      const userInfo = { ...rest };

      const token = createToken(user);
      const decodedToken = jwt_decode(token);
      const expiresAt = decodedToken.exp;

      res.cookie("token", token, {
        httpOnly: true,
      });
      res.json({
        message: "Authentication successful",
        userInfo,
        expiresAt,
      });
    } else {
      res.status(403).json({
        message: "Wrong email or password.",
      });
    }
  } catch (error) {
    console.log({ error });
    return res.status(400).json({ message: "Something went wrong." });
  }
});

/* Local Register */
router.post("/register", async (req, res) => {
  try {
    const { username, email, first_name, last_name } = req.body;
    const hashedPassword = await hashPassword(req.body.password);

    const userData = {
      email: email.toLowerCase(),
      first_name,
      last_name,
      username,
      password: hashedPassword,
    };

    const existingUsername = await knex
      .select("username")
      .from("users")
      .where({ username })
      .first();

    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const existingEmail = await knex
      .select("email")
      .from("users")
      .where({ email })
      .first();

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = await createUser(userData);

    if (newUser) {
      const token = createToken(newUser);
      const decodedToken = jwt_decode(token);
      const expiresAt = decodedToken.exp;

      const { id, first_name, last_name, email, username } = newUser;

      const userInfo = {
        id,
        first_name,
        last_name,
        email,
        username,
        profile_pic: null,
        google_id: null,
      };

      res.cookie("token", token, {
        httpOnly: true,
      });

      return res.json({
        message: "User created!",
        token,
        userInfo,
        expiresAt,
      });
    } else {
      return res.status(400).json({
        message: "There was a problem creating your account",
        error,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "There was a problem creating your account",
      error,
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send({ cookieDeleted: true });
});

module.exports = router;
