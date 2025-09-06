import express from 'express'
import authController from '../controller/auth.controller.js'
const router=express.Router()

router.post("/signup" ,authController.register )

export default router