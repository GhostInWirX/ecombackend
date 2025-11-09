//CreateOrder , orderHistory ,findOrderbyid
import express from 'express'
const router=express.Router()
import order from '../controller/order.controller.js'
import authenticate from '../middleware/authenticate.js'

router.post("/", authenticate, order.CreateOrder);
router.get("/user", authenticate, order.orderHistory);
router.get("/:id", authenticate, order.findOrderByid)
export default router