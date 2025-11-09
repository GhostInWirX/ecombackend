import express from 'express'
const router=express.Router()
import cartitem from '../controller/cartitems.controller.js'
import authenticate from '../middleware/authenticate.js'

router.put("/:id" ,authenticate,cartitem.updateCartItem);
router.delete("/:id" ,authenticate,cartitem.RemoveCartItem);

export default router;

