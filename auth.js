const passport = require("passport");
const LocalStrategy = require("passport-local");
const person = require("./models/personSchema");


passport.use(
  new LocalStrategy(async (userC, pwd, done) => {
    try {
      console.log("Received credentials:", userC, pwd);
      const user = await person.findOne({ username: userC });

      if (!user) return done(null, false, { message: "Incorrect username" });
      const isPasswardMatch = user.password === pwd;
      if (isPasswardMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "incorrect password." });
      }
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = passport;
