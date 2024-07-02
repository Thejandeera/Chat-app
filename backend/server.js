import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.Routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // Corrected here

app.use('/api/auth', authRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hello worldd!");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
