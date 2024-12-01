 
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Person = require("./models/personSchema");

passport.use(
    new localStrategy(async (username, password, done) => {
      try {parseFloat
        // console.log("Receive credentials:", username, password);
        const user = await Person.findOne({ username: username });
        if(!user)
          return done(null,false,{message:"Incorrect username."});
        const isPasswardMatch= user.password ===  password ? true:false;
        if(isPasswardMatch){
          return done(null,user);
        }else{
          return done(null,false,{message:'incorrect password.'})
        }
      } catch (err) {
        console.error("Error in LocalStrategy:", err);
        return done(err);
      }
    })
  );

  module.exports = passport