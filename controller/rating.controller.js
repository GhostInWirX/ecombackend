import { createRating, getProductRating } from "../service/rating.services.js";

const createrating = async (req, res) => {
    try {
        const payload = { productId: req.body?.productId, rating: req.body?.rating };
        const created = await createRating(payload, req.user);
        return res.status(201).send(created);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const getProductRatingHandler = async (req, res) => {
    try {
        const productId = req.params.id;
        const ratings = await getProductRating(productId);
        return res.status(200).send(ratings);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

export default {
    createrating,
    getProductRating: getProductRatingHandler
}
