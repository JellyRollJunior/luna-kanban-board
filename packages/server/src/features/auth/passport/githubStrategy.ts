import passportGithub from 'passport-github2';

const GithubStrategy = passportGithub.Strategy;

const options: passportGithub.StrategyOptions = {
    clientID: process.env['GITHUB_CLIENT_ID'] ?? '',
    clientSecret: process.env['GITHUB_CLIENT_SECRET'] ?? '',
    callbackURL: 'http://localhost:3000/auth/github/callback',
};
