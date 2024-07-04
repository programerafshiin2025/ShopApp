import express from 'express';
import ConnecToDb from './Config/db.js';
import userRoutes from './routes/userRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import dotenv from 'dotenv';

dotenv.config()

const app =express()
ConnecToDb()
const port= process.env.PORT || 5000
app.use(express.json())
app.use('/api/users/', userRoutes);
app.use('/api/products/',productsRoutes)


app.listen(port, ()=>{
          console.log(`server is running on port ${port}`);
})
