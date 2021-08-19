const numbers = [3, 6, 8, 45, 56, 78, 90, 95, 100];
const numberSliced = numbers.slice(4, 8)
console.log(numberSliced);
console.log(numbers);


//splice from remove a element from array
const numberSpliced = numbers.splice(4, 2);
console.log(numberSpliced);
console.log(numbers);

const numberSpliced2 = numbers.splice(4, 0, 111,);
console.log(numberSpliced2);
console.log(numbers);