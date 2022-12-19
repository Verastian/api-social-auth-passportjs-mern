const cors = require('cors');
const express = require('express');
const config = require("../config/config");
const expressSession = require('express-session');
const passport = require('passport');
const routes = require('../routes');
const { User } = require('../models');
require('../utils/passport.util');

const expressRun = ({ app, db, mongoSessionStore }) => {

    passport.serializeUser((user, done) => {
        process.nextTick(() => {
            done(null, user._id);
        });
    });
    passport.deserializeUser((id, done) => {
        process.nextTick(() => {
            User.findById(id, (err, user) => {
                if (!err) done(null, user);
                else done(err, null);
            });
        });
    });

    // Set static files folder

    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    app.use(express.json({ limit: '50mb' }));

    app.set("strict routing", true);

    // app.use(cors());

    app.use(
        cors({
            origin: "http://localhost:3000",
            methods: "GET,POST,PUT,DELETE",
            credentials: true,
        })
    );

    app.use(expressSession({
        name: config.COOKIE_NAME,
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        unset: 'destroy',
        cookie: {
            httpOnly: false,
            maxAge: 300000, // 5 min
        },
        store: mongoSessionStore
    }));

    // Enable passport authentication, session and plug strategies
    app.use(passport.initialize());
    app.use(passport.session());




    // Load API routes
    app.use(config.API.PREFIX, routes);



    // Error handlers
    process.on('unhandledRejection', (err) => {
        console.log('UNHANDLED REJECTION! 💥 Shutting down...');
        console.log(err.name, err.message);
        process.exit(1);
    });

    process.on('uncaughtException', (err) => {
        console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
        console.log(err.name, err.message);
        process.exit(1);
    });
}

module.exports = expressRun