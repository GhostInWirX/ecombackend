import express from 'express'
const router=express.Router()
import review from '../controller/review.controller'
import authenticate from '../middleware/authenticate'

router.post("/create",authenticate,review.createreview);
router.get("/:id",authenticate,rating.getAllreviews)


module.exports=router