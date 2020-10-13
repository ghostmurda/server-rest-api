const express = require('express')
const session = require('express-session');
const PORT = process.env.PORT || 5000
const server = express();
const { auth, getId } = require('./api/usersLoginData');

server.use(session({
    secret: `s${(+new Date).toString(16)}`,
    resave: true,
    saveUninitialized: true
}));

server.get('/login', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    if (auth(req.query.login, req.query.password) === 'success'){
        req.session.user = req.query.login;
        res.send(getId(req.query.login));
        console.log(`User ${req.session.user} is authorized`);
    } else {
        res.send('failed');
    }
});

server.get('/logout', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    console.log(`User ${req.session.user} is logged out`);
    req.session.destroy();
    res.send('logout success');
});

server.use('/api', require('./api/router'));

server.listen(PORT, () => console.log(`Listening on ${ PORT }`));
