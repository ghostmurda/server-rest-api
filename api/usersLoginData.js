let usersLoginData = [
    {id: "1", login: "admin", password: "admin",},
    {id: "2", login: "2", password: "admin",},
    {id: "3", login: "3", password: "admin",},
    {id: "4", login: "4", password: "admin",},
    {id: "5", login: "5", password: "admin",},
    {id: "6", login: "6", password: "admin",},
    {id: "7", login: "7", password: "admin",},
    {id: "8", login: "8", password: "admin",},
    {id: "9", login: "9", password: "admin",},
    {id: "10", login: "10", password: "admin",},
    {id: "11", login: "11", password: "admin",},
];

let checkAuth = (req, res, next) => {
    let responce = 'failed';
    for (let itemUser of usersLoginData) {
        if (req.session && itemUser.login === req.session.user) {
            responce = 'passed';
            break;
        }
    }
    if (responce === 'passed'){
        return next();
    } else {
        return res.sendStatus(401);
    }
};

let auth = (login, password) => {
    let responce = 'failed';
    for (let itemUser of usersLoginData) {
        if (itemUser.login === login && itemUser.password === password) {
            responce = 'success';
            break;
        }
    }
    return responce;
};

let getId = (login) => {
    let id;
    for (let itemUser of usersLoginData) {
        if (itemUser.login === login){
            id = itemUser.id;
            break;
        }
    }
    return id;
};

module.exports = {checkAuth, auth, getId};