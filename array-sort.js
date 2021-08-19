const numbers = [4, 5, 6, 8, 9, 3, 2, 1, 7];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['selim', 'alim', 'karim', 'jobbar', 'sobiruddin'];
const sortedFriends = friends.sort();
console.log(sortedFriends);
const reverseFriends = friends.reverse();
console.log(reverseFriends);

const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);


// number sorting of fun
const bigNumbers = [66, 77, 90, 111, 123, 333];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);


