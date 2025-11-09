import reviewService from "../service/review.services.js";

const createreview = async (req, res) => {
    try {
        const payload = {
            productId: req.body?.productId,
            review: req.body?.review,
            userId: req.user?._id || req.user
        };
        const created = await reviewService.createReview(payload);
        return res.status(201).send(created);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const getAllreviews = async (req, res) => {
    try {
        const productId = req.params.id;
        const reviews = await reviewService.getAllReview(productId);
        return res.status(200).send(reviews);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

export default {
    createreview,
    getAllreviews
}