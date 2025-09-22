import express from 'express'
import cors from 'cors'
import connectdb from './config/db.js'
import Authrouter from './routes/auth.routes.js'
import UserRoutes from './routes/user.routes.js'
const app=express()
app.use(express.json())
app.use(cors())
 await connectdb()
app.use('/auth',Authrouter)
app.use('/api/users',UserRoutes)

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

