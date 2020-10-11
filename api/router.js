const express = require('express');
const router = express.Router();
const { followingList } = require('./users');

router.get('/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json(followingList);
});

module.exports = router;