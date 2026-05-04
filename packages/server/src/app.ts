import express from 'express';
import { authRouter } from '@/features/auth/router.js';
import { errorHandler, errorHandler404 } from '@/middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/auth', authRouter);

// error handlers
app.use(/(.*)/, errorHandler404);
app.use(errorHandler);

export { app };
