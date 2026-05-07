import passportLocal from 'passport-local';
import { mapUserToUserTokenPayload } from '@/features/auth/mapper.js';
import * as userQueries from '@/features/users/queries.js';

const LocalStrategy = passportLocal.Strategy;
const localStrategy = new LocalStrategy(async (username, password, done) => {
    try {
        const data = await userQueries.getUserByUsername(username);

        // verify username exists
        if (!data) {
            return done(null, false, { message: 'Unable to authenticate credentials', });
        }
        // verify passwords match
        if (password !== data.password) {
            return done(null, false, { message: 'Unable to authenticate credentials', });
        }

        const userTokenPayload = mapUserToUserTokenPayload(data);
        return done(null, userTokenPayload);
    } catch (err) {
        return done(err);
    }
});

export { localStrategy }