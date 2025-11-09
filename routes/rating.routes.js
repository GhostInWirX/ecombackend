//createRating
//getProductRating

import express from 'express'
const router=express.Router()
import rating from '../controller/rating.controller.js'
import authenticate from '../middleware/authenticate.js'

router.post("/create", authenticate, rating.createrating);
router.get("/:id", authenticate, rating.getProductRating)

export default router