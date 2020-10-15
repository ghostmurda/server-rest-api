const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('src/models/users-db.json');
const db = low(adapter);

let getUser = (userId) => db.get('users').find({"id": userId.toString()}).value();

let getFollowingList = (userId) => {
    return db.get('users')
            .find({"id": userId.toString()})
            .get('followingList')
            .value()
}

let getUsersList = (skip, pageSize) => {
    let newArr = [];
    let i = 0;
    let j = (skip * pageSize) + 1;
    while (i < pageSize)
    {
        newArr.push(db.get('users').find({"id": j.toString()}).value());
        i++;
        j++;
    }
    return newArr;
}

module.exports = {getUser, getFollowingList, getUsersList};