const express = require("express")

const router = express.Router()

const {userSignUpController} = require("../controller/userSignup")
const { userSignInController } = require("../controller/userSignin")
const userDetailsController = require("../controller/userDetails")
const authToken = require("../middleware/authToken")
const userLogout = require("../controller/userLogout")
const allUsers = require("../controller/allUsers")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/userdetails",authToken ,userDetailsController)
router.get("/userLogout", userLogout)



// Admin pannel 
router.get("/all-user",authToken,allUsers)

module.exports = router 