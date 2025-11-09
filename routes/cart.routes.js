import express from 'express'
const router=express.Router()
import cart from '../controller/cart.controller.js'
import authenticate from '../middleware/authenticate.js'

router.get("/" , authenticate, cart.findUserCart);
router.put("/add" , authenticate, cart.addItemTocart);

export default router
