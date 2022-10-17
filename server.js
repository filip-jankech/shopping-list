import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router/router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

app.use(router);

app.listen(port, () => console.log("Server running on port " + port));