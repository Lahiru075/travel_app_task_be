import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { placeRoutes } from './routes/place.routes';
import { favoriteRoutes } from './routes/favorite.routes';
import { authRoutes } from './routes/auth.routes';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    })
);

app.use('/api/places', placeRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/auth', authRoutes);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('DB Connected');
    })
    .catch((error) => {
        console.error(`DB connection fail: ${error}`);
    });

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});