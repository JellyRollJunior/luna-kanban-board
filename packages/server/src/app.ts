import express from 'express';
import { authRouter } from '@/features/auth/auth.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/auth', authRouter);

export { app };
