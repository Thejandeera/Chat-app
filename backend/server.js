import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; // Import cookie-parser
import authRoutes from './routes/auth.Routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config(); // Load environment variables before using them

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
