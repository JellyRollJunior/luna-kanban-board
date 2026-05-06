// src/types/express.d.ts
import type { User as PrismaUser } from '@prisma/client';

declare global {
    namespace Express {
        interface User extends Pick<PrismaUser, 'id' | 'displayName'> {}
    }
}
