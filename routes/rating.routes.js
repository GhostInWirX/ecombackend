//createRating
//getProductRating

import express from 'express'
const router=express.Router()
import rating from '../controller/rating.controller'
import authenticate from '../middleware/authenticate'

router.post("/create",authenticate,rating.createrating);
router.get("/:id",authenticate,rating.getProductRating)


module.exports=router