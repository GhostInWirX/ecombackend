import express from 'express'
const router=express.Router()
import cart from '../controller/cart.controller'
import authenticate from '../middleware/authenticate'

router.get("/" ,authenticate,cart.findUserCart);
router.put("/add" ,authenticate,cart.addItemTocart);

module.exports=router
