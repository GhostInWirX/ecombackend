import Review from '../models/review.model.js'
import { findProductById } from '../service/product.service.js'

async function createReview(reqData) {
    
    const product = await findProductById(reqData.productId);

    if (!product) {
        throw new Error("Product not found.");
    }

    const review = new Review({
        user: reqData.userId,         
        product: reqData.productId,   
        review: reqData.review,      
        createdAt: new Date(),
    });

    return await review.save();
}

async function getAllReview(productId) {
    const product = await findProductById(productId);

    if (!product) {
        throw new Error("Product not found.");
    }

    return await Review.find({ product: productId }).populate("user");
}

export default { createReview, getAllReview }
