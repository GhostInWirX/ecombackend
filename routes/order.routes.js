//CreateOrder , orderHistory ,findOrderbyid
import express from 'express'
const router=express.Router()
import order from '../controller/order.controller'
import authenticate from '../middleware/authenticate'

router.post("/",authenticate,order.CreateOrder);
router.get("/user",authenticate,order.orderHistory);
router.get("/:id",authenticate,order.findOrderByid)

module.exports=router