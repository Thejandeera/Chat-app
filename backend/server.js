import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; // Import cookie-parser

import authRoutes from './routes/auth.Routes.js';
import messageRoutes from './routes/message.Routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config(); // Load environment variables before using them

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

app.use('/api/auth/', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
