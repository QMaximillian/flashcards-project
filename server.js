require('dotenv').config();
const cors = require('cors')
const express = require("express")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const compression = require('compression')
const jwt_decode = require('jwt-decode')
const enforce = require('express-sslify')

// const flashcardRoutes = require('./src/routes/flashcardRoutes.js')
// const userRoutes = require('./src/routes/userRoutes.js')
const authRoutes = require('./src/routes/authRoutes.js')
const publicRoutes = require('./src/routes/publicRoutes.js')
const cardSetRoutes = require('./src/routes/cardSetRoutes.js');

const isProduction = process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT_ALLOWED_ORIGIN : process.env.PRODUCTION_ALLOWED_ORIGIN
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(enforce.HTTPS({ trustProtoHeader: true, trustXForwardedHostHeader: true }))

app.options('*', cors({credentials: true, origin: isProduction, optionsSuccessStatus: 200})) 

app.use(cors({ credentials: true, origin: isProduction, optionsSuccessStatus: 200 }));
// app.use(cors({ credentials: true, origin: isProduction, optionsSuccessStatus: 200 }));

// app.use(async (req, res, next) => {
  
  //   try {
    //     res.setHeader("Access-Control-Allow-Origin", isProduction);
    // 		res.setHeader("Access-Control-Allow-Credentials", "true");
    // 		res.setHeader("Access-Control-Max-Age", 86400);
    // 		res.setHeader("Access-Control-Allow-Headers", "content-type");
    // 		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    //   } catch(error) {
      //     console.log(error)
      //     return res.send({ message: "Something went wrong" })
      //   }
      
      //   next()
      // })
// app.enable('trust proxy')
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/api', async (req, res) => {
  res.send({ message: "It worked"})
})

app.use('/api', publicRoutes)
app.use('api/auth', authRoutes)

function attachUser(req, res, next) {
  const token = req.cookies.token;
  console.log(req.cookies)
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication invalid" })
  }

  const decodedToken = jwt_decode(token)
  if (!decodedToken) {
    return res.status(401).json({
      message: "There was a problem authorizing the request"
    })
  } else {
    req.user = decodedToken
    next()
  }
}

app.use(attachUser)

app.use('/api', cardSetRoutes)

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen({ port: process.env.PORT || 8000 }, () => {
  console.log('Server on http://localhost:8000/');
});
