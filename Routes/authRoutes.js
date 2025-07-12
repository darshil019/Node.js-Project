const express = require('express')
let router = express.Router()
const jwt = require('jsonwebtoken')

const authController = require('../Controllers/authController')


//jwt verification User
const protect = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  if (!token) {
    return res.status(404).send({
      msg: "UserNotAuthorized"
    })
  }
  try {
    const decoded = jwt.verify(token, "abc")
    req.user = decoded
    console.log(req.user)
    next()
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}


//authRoutes
router.post('/user/signup', authController.userSignUp)
router.post('/user/login', authController.userSignin)
router.get('/user/getUser',protect,authController.getData)

module.exports = router