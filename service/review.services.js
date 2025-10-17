import Review from '../models/review.model'
import productservice from '../service/product.service.js'

async function createReview(reqData) {
    
    const product = await productservice.findProductById(reqData.productId);

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
    const product = await productservice.findProductById(productId);

    if (!product) {
        throw new Error("Product not found.");
    }

    return await Review.find({ product: productId }).populate("user");
}
