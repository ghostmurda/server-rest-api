let followingList = [
    {name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
    {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
    {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
    {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
    {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    {name: "Kelsi Clarkson", posts: "3", followers: "4", following: "20", info: "Test"},
    {name: "Taiba Moran", posts: "234", followers: "53", following: "5", info: "Test"},
    {name: "Kason Parry", posts: "0", followers: "0", following: "100", info: "Test"},
    {name: "Manha Hayden", posts: "427", followers: "568", following: "23", info: "Test"},
    {name: "Cydney Power", posts: "15", followers: "99", following: "6", info: "Test"},
];

let popularList = [
    {name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
    {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
    {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
    {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
    {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    {name: "Kelsi Clarkson", posts: "3", followers: "4", following: "20", info: "Test"},
    {name: "Taiba Moran", posts: "234", followers: "4568", following: "5", info: "Test"},
    {name: "Kason Parry", posts: "0", followers: "356", following: "100", info: "Test"},
    {name: "Manha Hayden", posts: "427", followers: "1024", following: "23", info: "Test"},
    {name: "Cydney Power", posts: "15", followers: "2009", following: "6", info: "Test"},
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

module.exports = {followingList, popularList, getPopularList};