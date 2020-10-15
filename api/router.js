const express = require('express');
const router = express.Router();
const { getFollowingList, getUsersList, getUser } = require('./users');
const { checkAuth } = require('./usersLoginData');

router.get('/test', checkAuth, (req, res) => {
    res.send('authorized');
})

router.get('/users/following', (req, res) => {
    res.json(getFollowingList(req.query.userId));
});

router.get('/users/all', (req, res) => {
    let resJson = getUsersList(req.query.skip, req.query.pageSize);
    res.json(resJson);
});

router.get('/users/profile', (req, res) => {
    let resJson = getUser(req.query.userId);
    res.json(resJson);
});

module.exports = router;