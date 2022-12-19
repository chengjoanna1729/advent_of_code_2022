const fs = require('fs');

const elf_calories = fs.readFileSync('./inputs/day_1.txt', 'utf-8').split('\r\n\r\n');
const elf_calories_number = elf_calories.map(list => list.split('\r\n').map(Number).reduce((a,b) => a+b));
const max = Math.max(...elf_calories_number);

elf_calories_number.splice(elf_calories_number.indexOf(max),1);
const second_max = Math.max(...elf_calories_number);

elf_calories_number.splice(elf_calories_number.indexOf(second_max),1);
const third_max = Math.max(...elf_calories_number);

console.log(max+second_max+third_max);