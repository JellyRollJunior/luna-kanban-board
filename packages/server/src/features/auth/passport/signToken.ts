import type { UserTokenPayload } from '@/features/auth/types.js';
import jwt from 'jsonwebtoken';

const signToken = (user: UserTokenPayload) => {
    const options = {
        expiresIn: 60 * 60,
    };
    const token = jwt.sign(user, process.env['TOKEN_SECRET'] ?? '', options);
    return token;
};

export { signToken };
