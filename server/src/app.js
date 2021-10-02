require("dotenv").config;
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import bcrypt from 'bcrypt';
const db = require('./db/index.js');

import routes from './routes'

const LocalStrategy = require('passport-local').Strategy
const store = new session.MemoryStore();


const app = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        store: store,
        cookie: { maxage: 1000 * 60 * 60 *24, secure: false},
        saveUninitialized: false,
        resave: false
    })
)

app.use(passport.initialize());
app.use(passport.session())

passport.serializeUser((user,done) => {
    //user.id prop name?
    done(null, user.username)
})

passport.deserializeUser( async (username, done) => {
    //db user lookup
    const sqlStr = 'SELECT * FROM users WHERE username=$1';
    const value = [username];
    const user = await db.query(sqlStr, value);
    return done(null, user.rows[0]);

    // db.users.findById(id, function(err, user) {
    //   if(err) return done(err)
    //   done(null, user);
    // });
})

passport.use(
    new LocalStrategy( async function(username, password, done) {
        // Check if user exists in our db
        const sqlStr = 'SELECT * FROM users WHERE username=$1';
        const value = [username];
        const userQueryResult = await db.query(sqlStr, value); 
        console.log("User query result: \n", userQueryResult);
        // if no user
        if (userQueryResult.rows <= 0 ) return done(null, false)
        // check if password matches db
        const hashCheck = await bcrypt.compare(password, userQueryResult.rows[0].password);
        if (!hashCheck) return done(null, false)
        // Success: user found in db & plaintext password matches db password
        return done(null, userQueryResult.rows[0])

        // // If user found
        // if (userQueryResult.rows > 0) {
        //   // Check plaintext password against db password
        //   // If user exists and our database 
        //   if (hashCheck) {
        //     console.log('hash check worked \n', userQueryResult)
        //     return cb(null, userQueryResult.rows[0]);
        //   } else {
        //     return cb(null, false);
        //   }
        // } else {
        //   return cb(null, false);
        // }
    })
)

app.use((req, res, next) => {
    console.log(req.session)
    console.log(req.user)
    next()
})

app.post("/auth/login", passport.authenticate('local'), (req, res) => {
    console.log("This is your user: \n", req.user);
    console.log("This is your session \n", req.session);
    console.log("Are you auth'd? \n", req.isAuthenticated())
    req.logout();
    console.log("Are you auth'd? \n", req.isAuthenticated())
    res.send("Hey idiot you logged in.")
  });
  

app.use('/api/products', routes.products);
app.use('/api/users', routes.users);
app.use('/api/orders', routes.orders);
// app.use('/auth', routes.auth)

// TODO: global error handler
app.use((err, req, res, next)=>{
    if(err) console.log("Error from global handler: \n", err)
})
app.listen(3000, () => {
    console.log(`App listening on port ${process.env.PORT}.`)
})
