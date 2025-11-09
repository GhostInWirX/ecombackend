import express from 'express'
const router=express.Router()
import review from '../controller/review.controller.js'
import authenticate from '../middleware/authenticate.js'

router.post("/create", authenticate, review.createreview);
router.get("/:id", authenticate, review.getAllreviews)

export default router