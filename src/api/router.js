const express = require('express');
const router = express.Router();
const {getFollowingList, getUsersList, getUser, updateInfo, addPost} = require('../services/usersService');

router.get('/users/following', (req, res) => {
    res.json(getFollowingList(req.query.userId));
});

router.get('/users/all', (req, res) => {
    res.json(getUsersList(req.query.skip, req.query.pageSize));
});

router.get('/users/profile', (req, res) => {
    res.json(getUser(req.query.userId));
});

router.put('/users/info', (req, res) => {
    if (updateInfo(req.body.userId, req.body.info)){
        res.json(getUser(req.body.userId));
    }
});

router.post('/users/profile/addpost', (req, res) => {
    if (addPost(req.body.userId, req.body.creator, req.body.text)){
        res.json(getUser(req.body.userId));
    }
});

module.exports = router;