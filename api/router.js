const express = require('express');
const router = express.Router();
const { followingList, popularList, getPopularList, getUser } = require('./users');
const { checkAuth } = require('./usersLoginData');

router.get('/test', checkAuth, (req, res) => {
    res.send('authorized');
})

router.get('/users/following', checkAuth, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json(followingList);
});

router.get('/users/popular', checkAuth, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    let resJson = getPopularList(popularList, req.query.skip, req.query.pageSize);
    res.json(resJson);
});

router.get('/users/profile', checkAuth, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    let resJson = getUser(popularList, req.query.userId);
    res.json(resJson);
});

module.exports = router;