let followingList = [
    {id: "2", name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
    {id: "3", name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
    {id: "4", name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
    {id: "5", name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
    {id: "6", name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    {id: "7", name: "Kelsi Clarkson", posts: "3", followers: "4", following: "20", info: "Test"},
    {id: "8", name: "Taiba Moran", posts: "234", followers: "4568", following: "5", info: "Test"},
    {id: "9", name: "Kason Parry", posts: "0", followers: "356", following: "100", info: "Test"},
    {id: "10", name: "Manha Hayden", posts: "427", followers: "1024", following: "23", info: "Test"},
    {id: "11", name: "Cydney Power", posts: "15", followers: "2009", following: "6", info: "Test"},
];

let popularList = [
    {id: "2", name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
    {id: "3", name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
    {id: "4", name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
    {id: "5", name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
    {id: "6", name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    {id: "7", name: "Kelsi Clarkson", posts: "3", followers: "4", following: "20", info: "Test"},
    {id: "8", name: "Taiba Moran", posts: "234", followers: "4568", following: "5", info: "Test"},
    {id: "9", name: "Kason Parry", posts: "0", followers: "356", following: "100", info: "Test"},
    {id: "10", name: "Manha Hayden", posts: "427", followers: "1024", following: "23", info: "Test"},
    {id: "11", name: "Cydney Power", posts: "15", followers: "2009", following: "6", info: "Test"},
].sort((a, b) => b.followers - a.followers);

let getPopularList = function (arr, skip, pageSize){
    let newArr = [];
    let i = 0;
    let j = skip * pageSize;
    while (i < pageSize)
    {
        newArr.push(arr[j]);
        i++;
        j++;
    }
    return newArr;
}

let getUser = function(arr, userId){
    let user = {};
    for (let userItem of arr){
        if (userItem.id == userId){
            user = userItem;
            break;
        }
    }
    return user;
}

module.exports = {followingList, popularList, getPopularList, getUser};