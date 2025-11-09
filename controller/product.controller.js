import { createProduct as createProductSvc, deleteProduct as deleteProductSvc, updateProduct as updateProductSvc, getAllProducts as getAllProductsSvc, findProductById as findProductByIdSvc, createMultipleroduct as createMultipleroductSvc } from "../service/product.service.js";

const createProduct = async (req, res) => {
    try {
        const product = await createProductSvc(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const createMultipleProducts = async (req, res) => {
    try {
        await createMultipleroductSvc(req.body?.products || []);
        return res.status(201).send({ message: "Products created" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updated = await updateProductSvc(req.params.id, req.body);
        return res.status(200).send(updated);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const msg = await deleteProductSvc(req.params.id);
        return res.status(200).send({ message: msg });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const data = await getAllProductsSvc(req.query);
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const findProductById = async (req, res) => {
    try {
        const product = await findProductByIdSvc(req.params.id);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

export default {
    createProduct,
    createMultipleProducts,
    updateProduct,
    deleteProduct,
    getAllProducts,
    findProductById
};
