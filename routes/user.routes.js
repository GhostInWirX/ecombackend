import express from 'express'
import Usercontroller from '../controller/user.controller.js'
const router=express.Router()

router.get("/profile" ,Usercontroller.getUserProfile )
router.get("/getall",Usercontroller.getAllUsers)
export default router