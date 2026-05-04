import express from 'express';
import { authRouter } from '@/features/auth/router.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/auth', authRouter);

// error handlers
app.use(errorHandler)

export { app };
