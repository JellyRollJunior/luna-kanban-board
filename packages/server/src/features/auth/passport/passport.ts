import passport from 'passport';
import { localStrategy } from '@/features/auth/passport/localStrategy.js';
import { jwtStrategy } from '@/features/auth/passport/jwtStrategy';

passport.use(localStrategy);
passport.use(jwtStrategy);

export { passport };
