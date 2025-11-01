import express from 'express'
const router=express.Router()
import cartitem from '../controller/cartitems.controller'
import authenticate from '../middleware/authenticate'

router.put("/:id" ,authenticate,cartitem.updateCartItem);
router.delete("/:id" ,authenticate,cartitem.RemoveCartItem);

module.exports=router
