const express = require('express')
const { authenticate } = require('../Controllers/auth')
const router = express.Router()

// router.post("/signup", userControllers.userRegister);
// router.post("/login", userControllers.userLogin);
// router.get("/me", checkAuth, userControllers.getMe);

router.post('/login', authenticate)

module.exports = { authRouter: router }
