const fs = require('fs');

const commands = fs.readFileSync('./inputs/day_7.txt', 'utf-8').split('\r\n\$ ').map(line => line.split('\r\n'));
console.log(commands);