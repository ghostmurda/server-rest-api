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

let updateInfo = (userId, newInfo) => {
    db.get('users').find({"id": userId.toString()}).assign({info: newInfo}).write();
    return true;
}

let addPost = (userId, creator, text) => {
    db.get('users').find({"id": userId.toString()}).get('postsData')
        .push({
            id: (db.get('users').find({"id": userId.toString()}).get('postsData').value()).length,
            name: creator,
            text
        })
        .write();
    return true;
}

module.exports = {getUser, getFollowingList, getUsersList, updateInfo, addPost};