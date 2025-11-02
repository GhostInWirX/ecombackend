import express from 'express'
const router=express.Router()
import product from '../controller/product.controller'
import authenticate from '../middleware/authenticate'

router.post("/",authenticate,product.createProduct);
router.post("/creates",authenticate,product.createMultipleProducts)
router.put("/:id",authenticate,product.updateproduct)
router.delete("/:id",authenticate,product.deleteproduct)

module.exports=router

