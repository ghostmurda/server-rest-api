let usersLoginData = [
    {id: "1", name: 'Daniel Simonov', login: "admin", password: "admin",},
    {id: "2", name: "Pavel Durov", login: "2", password: "admin",},
    {id: "3", name: "Jon Snow", login: "3", password: "admin",},
    {id: "4", name: "Test User", login: "4", password: "admin",},
    {id: "5", name: "Dana West", login: "5", password: "admin",},
    {id: "6", name: "Roland Worthington", login: "6", password: "admin",},
    {id: "7", name: "Kelsi Clarkson", login: "7", password: "admin",},
    {id: "8", name: "Taiba Moran", login: "8", password: "admin",},
    {id: "9", name: "Kason Parry", login: "9", password: "admin",},
    {id: "10", name: "Manha Hayden", login: "10", password: "admin",},
    {id: "11", name: "Cydney Power", login: "11", password: "admin",},
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

let getName = (login) => {
    let name;
    for (let itemUser of usersLoginData) {
        if (itemUser.login === login){
            name = itemUser.name;
            break;
        }
    }
    return name;
}

module.exports = {checkAuth, auth, getId, getName};