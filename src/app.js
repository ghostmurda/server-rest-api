const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const server = express();
const {auth} = require('./services/usersLoginDataService');

server.use(cookieParser());
server.use(bodyParser.json());

server.use(cors({
        credentials: true,
        origin: ['http://localhost:3000', 'https://ghostmurda.github.io'],
        exposedHeaders: ['set-cookie']
    })
);

server.use(session({
    secret: `s${(+new Date).toString(16)}`,
    cookie: {
        maxAge: 600000,
        httpOnly: false,
    },
    saveUninitialized: false,
    resave: false,
    unset: 'destroy'
}));

server.post('/login', (req, res) => {
    res.json(auth(req.body.login, req.body.password));
});

server.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('logout success');
});

server.use('/api', require('./api/router'));

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
