const express = require('express');
const router = express.Router();
const { followingList, popularList, getPopularList, getUser } = require('./users');
const { checkAuth } = require('./usersLoginData');

router.get('/test', checkAuth, (req, res) => {
    res.send('authorized');
})

router.get('/users/following', (req, res) => {
    res.json(followingList);
});

router.get('/users/popular', (req, res) => {
    let resJson = getPopularList(popularList, req.query.skip, req.query.pageSize);
    res.json(resJson);
});

router.get('/users/profile', (req, res) => {
    let resJson = getUser(popularList, req.query.userId);
    res.json(resJson);
});

module.exports = router;