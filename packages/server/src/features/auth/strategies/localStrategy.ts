import passportLocal from 'passport-local';
import * as userQueries from '@/features/users/queries.js';

const LocalStrategy = passportLocal.Strategy;
const localConfig = new LocalStrategy(async (username, password, done) => {
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
        return done(null, data);
    } catch (err) {
        return done(err);
    }
});

export { localConfig }