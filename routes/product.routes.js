// getAllProducts,
// findProductById,
import express from 'express'
const router=express.Router()
import product from '../controller/product.controller'
import authenticate from '../middleware/authenticate'

router.get("/",authenticate,product.getAllProducts);
router.get("/:id",authenticate,product.findProductById)


module.exports=router