import orderservice from '../service/order.service.js'

const getAllOrders=async(req,res)=>{
    try{
        const orders=await orderservice.getAllOrders();
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

const ConfirmOrders=async(req,res)=>{
     const orderId=req.params.orderId;
    try{
        const orders=await orderservice.ConfirmOrders(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

const DeleteOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await orderservice.DeleteOrders(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

const ShippedOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await orderservice.DeleteOrders(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

const CancelOrders =async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await orderservice.CancelOrders(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }

}

//DeleteOrders , DeleiverOrders



