const express = require('express')
const PORT = process.env.PORT || 5000
const { followingList } = require('./api/users');

express()
    .get('/users', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(followingList);
        res.end();
    }).listen(PORT, () => console.log(`Listening on ${ PORT }`))
