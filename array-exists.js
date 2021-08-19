function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friends.length > mega.length) {
            mega = friend;
        }

    }
    return mega;
}
const friends = ['riyad', 'naim', 'sourov', 'lutu', 'putu', 'popy'];
const myBigBuddy = megaFriend(1234);
// console.log(myBigBuddy);
if (friends.indexOf('fox') != -1) {
    console.log('fox');
}
else {
    console.log('fox does not exist')
}

if (friends.includes('lion')) {
    console.log('lion2');
}
//concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);

