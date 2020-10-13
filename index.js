const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const server = express();
const {auth, getId} = require('./api/usersLoginData');

server.use(cors({
        credentials: true,
        origin: ['https://localhost:3000', 'http://localhost:3000',
            'https://ghostmurda.github.io', 'http://ghostmurda.github.io'],
        exposedHeaders: ['set-cookie']
    })
);

server.use(cookieParser());

server.use(session({
    secret: `s${(+new Date).toString(16)}`,
    cookie: {
        maxAge: 600000, // 10 minutes
        //httpOnly: false,
        //sameSite: 'none',
        //secure: true,
    },
    saveUninitialized: false,
    resave: false,
    unset: 'destroy'
}));

server.get('/login', (req, res) => {
    if (auth(req.query.login, req.query.password) === 'success') {
        req.session.user = req.query.login;
        res.send(getId(req.query.login));
        console.log(`User ${req.session.user} is authorized`);
    } else {
        res.send('failed');
    }
});

server.get('/logout', (req, res) => {
    console.log(`User ${req.session.user} is logged out`);
    req.session.destroy();
    res.send('logout success');
});

server.use('/api', require('./api/router'));

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
