require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const compression = require("compression");
const jwt_decode = require("jwt-decode");
const path = require("path");
const { checkNodeEnvironment } = require("./src/utils.js");

const flashcardRoutes = require("./src/routes/flashcardRoutes.js");
const userRoutes = require("./src/routes/userRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");
const publicRoutes = require("./src/routes/publicRoutes.js");
const cardSetRoutes = require("./src/routes/cardSetRoutes.js");

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(express.static(path.join(__dirname, "/client/build")));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", publicRoutes);
app.use("/api/auth", authRoutes);

function attachUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Authentication invalid" });
  }

  const decodedToken = jwt_decode(token);
  if (!decodedToken) {
    return res.status(401).json({
      message: "There was a problem authorizing the request",
    });
  } else {
    req.user = decodedToken;
    next();
  }
}

app.use("/api", attachUser, cardSetRoutes);
app.use("/api", attachUser, userRoutes);
app.use("/api", attachUser, flashcardRoutes);

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 8000;

app.listen({ port }, () => {
  if (checkNodeEnvironment("development")) {
    console.log(`Server on http://localhost:${port}`);
  } else if (checkNodeEnvironment("test")) {
    console.log(`TEST ENVIRONMENT: Server on http://localhost:${port}`);
  }
});
