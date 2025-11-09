import { createorder, userOrderHistory, findOrderById } from "../service/order.service.js";

const CreateOrder = async (req, res) => {
    try {
        const user = await req.user;
        const shippingAddress = req.body.shipAdress || req.body.shippingAddress || req.body;
        const created = await createorder(shippingAddress, user);
        return res.status(201).send(created);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const orderHistory = async (req, res) => {
    try {
        const userId = req.user?._id || await req.user;
        const orders = await userOrderHistory(userId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const findOrderByid = async (req, res) => {
    try {
        const order = await findOrderById(req.params.id);
        return res.status(200).send(order);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

export default {
    CreateOrder,
    orderHistory,
    findOrderByid
}