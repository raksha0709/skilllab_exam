const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./models/User');

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ email: profile.emails[0].value }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      const newUser = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        provider: 'google'
      });
      newUser.save((err) => {
        if (err) return done(err);
        return done(null, newUser);
      });
    } else {
      return done(null, user);
    }
  });
}));

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Similar logic as Google authentication
}));

// Initialize Passport and session management
app.use(passport.initialize());
app.use(passport.session());