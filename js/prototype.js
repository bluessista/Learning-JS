//result should be the sum of all numbers, that are greater than 50
const numbers = [7, 8, 97, 56, 18, 29, 44, 83, 100, 90, 3];

const bigNumbers = numbers.filter((i) => i > 50);
const sum = bigNumbers.reduce((num, bigNumber) => {
    return num + bigNumber;
}, 0);
console.log(sum);

//result should sum up all numbers and make a sentence out ouf the words
const findTheNote = [1, 19, null, 'we', 18, 'like', null, 116, 3, 'you'];

const int = findTheNote.filter(e => typeof(e) === 'number');
const add = int.reduce((a, b) => a + b);

// console.log(int);
// console.log(add);

const note = findTheNote.filter(s => typeof(s) === 'string');
const sentence = `"${note.join(' ', ', ')}"`;

// console.log(note);
console.log(sentence);
