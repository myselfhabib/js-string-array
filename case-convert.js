const anthem = 'roses are red, violet are ';
const search = 'blue';

const userInput = 'momoLand';
const savedUserName = 'momoLand';
console.log(userInput.toLocaleLowerCase());
console.log(savedUserName.toUpperCase());
if (userInput.toUpperCase() == savedUserName.toLowerCase()) {
    console.log('user exist');
}