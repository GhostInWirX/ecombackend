import express from 'express'
import cors from 'cors'
import connectdb from './config/db.js'

const app=express()
app.use(express.json())
app.use(cors())
 await connectdb()

 
import Authrouter from './routes/auth.routes.js'
app.use('/auth',Authrouter)

import UserRoutes from './routes/user.routes.js'
app.use('/api/users',UserRoutes)

import adminOrder from './routes/adminOrder.routes.js'
app.use('/api/admin/orders',adminOrder)

import adminproduct from './routes/adminproduct.routes.js'
app.use('/api/admin/product',adminproduct)

import cart from './routes/cart.routes.js'
app.use('/api/cart',cart)

import cartitems from './routes/cartitems.routes.js'
app.use('/api/cart/cart_items',cartitems)

import order from './routes/order.routes.js'
app.use('/api/orders',order)

import product from './routes/product.routes.js'
app.use('/api/products',product)

import rating from './routes/rating.routes.js'
app.use('/api/rating',rating)

import review from './routes/review.routes.js'
app.use('/api/review',review)



app.get('/',(req,res)=>{
    console.log('GET /request Received')
    res.status(200).json({message:"Server Is Running"})
})

app.use((req,res)=>{
    res.status(404).json({message:"Server Failed"})
})

        app.listen(4000, () => {
            console.log("Server Is Running on http://localhost:4000")
        });
export default app;

