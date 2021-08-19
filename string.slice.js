const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
console.log(withoutA);

//slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

//substr
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

//substring

const anotherPart2 = anthem.substring(11, 18);
// console.log(anotherPart2);

//concat
const first = 'dhaka';
const second = 'city';
// const fullString = first + second + third;
// console.log(fullString);
const fullString = first.concat(second).concat('abcd')
// console.log(fullString);

const words2 = ['alim', 'badhon', 'calim', 'david'];
const allJoined = words2.join('');
const allJoined = words2.join(',');
const allJoined = words2.join(', ');
const allJoined = words2.join(' ');
// console.log(allJoined);

