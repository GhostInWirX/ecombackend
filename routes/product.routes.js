// getAllProducts,
// findProductById,
import express from 'express'
const router=express.Router()
import product from '../controller/product.controller.js'
import authenticate from '../middleware/authenticate.js'
router.put("/update/:id",authenticate,product.updateProduct)
router.get("/", authenticate, product.getAllProducts);
router.get("/:id", authenticate, product.findProductById)

export default router