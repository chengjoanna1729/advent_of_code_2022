const fs = require('fs');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const upper_alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const concatenated_alphabet = alphabet+upper_alphabet;

const rucksacks = fs.readFileSync('./inputs/day_3.txt', 'utf-8').split('\r\n');

// let sum_priorities = 0;
// rucksacks.forEach(rucksack => {
//     const first_compt = rucksack.slice(0, rucksack.length/2);
//     const second_compt = rucksack.slice(rucksack.length/2);
//     const common_letter = first_compt.split('').find(letter => second_compt.split('').includes(letter));
//     sum_priorities += concatenated_alphabet.indexOf(common_letter)+1;
// })

// console.log(sum_priorities);

let groups = [];
for (let i=0; i<rucksacks.length/3; i++) {
    groups.push([rucksacks[3*i], rucksacks[3*i+1], rucksacks[3*i+2]]);
}

let sum_priorities = 0;
groups.forEach(group => {
    const first_common = group[0].split('').filter(letter => group[1].split('').includes(letter));
    const common = group[2].split('').find(letter => first_common.includes(letter));
    sum_priorities += concatenated_alphabet.indexOf(common)+1;
})
console.log(sum_priorities);