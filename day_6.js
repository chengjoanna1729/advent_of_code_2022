const fs = require('fs');

const letters = fs.readFileSync('./inputs/day_6.txt', 'utf-8');

let tally = 0;

for (let i=0; i<letters.length; i++) {
    const set = new Set();
    for (let j=0; j<14; j++) {
        set.add(letters[i+j])
    }
    if (set.size === 14) {
        console.log(tally+14);
        return;
    } else {
        tally += 1;
    }
}
