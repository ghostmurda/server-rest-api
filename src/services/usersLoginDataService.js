const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('src/models/usersLoginData-db.json');
const db = low(adapter);

let auth = (login, password) => {
    if (db.get('users').find({"login": login}).value() &&
        db.get('users').find({"login": login}).get('password').value() === password) {
        return {
            "userId": db.get('users').find({"login": login}).get('id').value(),
            "userName": db.get('users').find({"login": login}).get('name').value()
        };
    } else {
        return "failed";
    }
}

module.exports = {auth};

// let checkAuth = (req, res, next) => {
//     let responce = 'failed';
//     for (let itemUser of usersLoginData) {
//         if (req.session && itemUser.login === req.session.user) {
//             responce = 'passed';
//             break;
//         }
//     }
//     if (responce === 'passed'){
//         return next();
//     } else {
//         return res.sendStatus(401);
//     }
// }