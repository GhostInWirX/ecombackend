import express from 'express'
const router=express.Router()
import adminOrder from '../controller/adminOrder.controller'
import authenticate from '../middleware/authenticate'

router.get("/" ,authenticate,adminOrder.getAllOrders);
router.get("/:orderId/confirm" ,authenticate,adminOrder.ConfirmOrders);
router.get("/:orderId/ship" ,authenticate,adminOrder.ShippedOrders);
router.get("/:orderId/cancel" ,authenticate,adminOrder.CancelOrder);
router.get("/:orderId/DeleteOrders" ,authenticate,adminOrder.DeleteOrder);


module.exports=router
