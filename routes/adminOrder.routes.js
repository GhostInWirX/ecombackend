import express from 'express'
const router=express.Router()
import adminOrder from '../controller/adminOrder.controller.js'
import authenticate from '../middleware/authenticate.js'

router.get("/" , authenticate, adminOrder.getAllOrders);
router.get("/:orderId/confirm" , authenticate, adminOrder.confirmOrders);
router.get("/:orderId/ship" , authenticate, adminOrder.shippedOrders);
router.get("/:orderId/cancel" , authenticate, adminOrder.cancelOrders);
router.get("/:orderId/delete" , authenticate, adminOrder.deleteOrders);


export default router
