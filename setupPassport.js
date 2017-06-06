passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pass'
  },
  (username, password, done) => {
    log.debug("Login process:", username);
    return db.one("SELECT id, username, email, firstName, lastName " +
        "FROM users " +
        "WHERE user_email=$1 AND user_pass=$2", [username, password])
      .then( function(result) {
        return done(null, result);
      })
      .catch( function(err) {
        log.error("/login: " + err);
        return done(null, false, {message:'Wrong user name or password'});
      });
  }));


// Serialize sessions
passport.serializeUser((user, done)=>{
    log.debug("serialize ", user);
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done)=>{
    log.debug("deserialize ", id);
    db.one("SELECT user_id, user_name, user_email, user_role FROM users " +
            "WHERE user_id = $1", [id])
    .then((user)=>{
      //log.debug("deserializeUser ", user);
      done(null, user);
    })
    .catch((err)=>{
      done(new Error(`User with the id ${id} does not exist`));
    })
  });

app.post('/', passport.authenticate('local'), (req, resp)=>{
  log.debug(req.user);
  resp.send(req.user);
});
