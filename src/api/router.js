const express = require('express');
const router = express.Router();
const { getFollowingList, getUsersList, getUser } = require('../services/usersService');

router.get('/users/following', (req, res) => {
    res.json(getFollowingList(req.query.userId));
});

router.get('/users/all', (req, res) => {
    res.json(getUsersList(req.query.skip, req.query.pageSize));
});

router.get('/users/profile', (req, res) => {
    res.json(getUser(req.query.userId));
});

module.exports = router;