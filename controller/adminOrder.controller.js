import { getAllOrders as getAllOrdersSvc, ConfirmOrders as confirmOrdersSvc, ShipOrder as shipOrderSvc, DeleteOrders as deleteOrdersSvc, CancelOrders as cancelOrdersSvc } from '../service/order.service.js'

const getAllOrders=async(req,res)=>{
    try{
        const orders=await getAllOrdersSvc();
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }
}

const confirmOrders=async(req,res)=>{
     const orderId=req.params.orderId;
    try{
        const orders=await confirmOrdersSvc(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

const deleteOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await deleteOrdersSvc(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

const shippedOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await shipOrderSvc(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

const cancelOrders =async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await cancelOrdersSvc(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

export default {
    cancelOrders,
    shippedOrders,
    deleteOrders,
    confirmOrders,
    getAllOrders
}
//DeleteOrders , DeleiverOrders



