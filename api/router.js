const express = require('express');
const router = express.Router();
const { followingList, popularList, getPopularList, getUser } = require('./users');

router.get('/users/following', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json(followingList);
});

router.get('/users/popular', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    let resJson = getPopularList(popularList, req.query.skip, req.query.pageSize);
    res.json(resJson);
});

router.get('/users/profile', (req, res) => {
    let resJson = getUser(popularList, req.query.userId);
    res.json(resJson);
});

module.exports = router;