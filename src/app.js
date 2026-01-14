import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api', routes);

// Error Handling Middleware
app.use(errorHandler);

export default app;


