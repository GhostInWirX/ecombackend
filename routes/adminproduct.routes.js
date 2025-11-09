import express from 'express'
const router=express.Router()
import product from '../controller/product.controller.js'
import authenticate from '../middleware/authenticate.js'

router.post("/", authenticate, product.createProduct);
router.post("/creates", authenticate, product.createMultipleProducts)
router.put("/:id", authenticate, product.updateProduct)
router.delete("/:id", authenticate, product.deleteProduct)

export default router

