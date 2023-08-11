import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';

import * as AuthService from "../services/auth.service";

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser((id: string, done) => {
  const user = 'User';
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      callbackURL: '/api/v1/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
        // console.log(profile);

    const user = AuthService.googleAuth(profile)
      done(null, user);
    }
  )
);

export default passport;