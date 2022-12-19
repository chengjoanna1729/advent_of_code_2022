const fs = require('fs');

const moves = fs.readFileSync('./inputs/day_5.txt', 'utf-8').split('\r\n');

const crates = {
    // 1: ['Z', 'N'],
    // 2: ['M', 'C', 'D'],
    // 3: ['P']
    1: ['W', 'D', 'G', 'B', 'H', 'R', 'V'],
    2: ['J', 'N', 'G', 'C', 'R', 'F'],
    3: ['L', 'S', 'F', 'H', 'D', 'N', 'J'],
    4: ['J', 'D', 'S', 'V'],
    5: ['S', 'H', 'D', 'R', 'Q', 'W', 'N', 'V'],
    6: ['P', 'G', 'H', 'C', 'M'],
    7: ['F', 'J', 'B', 'G', 'L', 'Z', 'H', 'C'],
    8: ['S', 'J', 'R'],
    9: ['L', 'G', 'S', 'R', 'B', 'N', 'V', 'M']
}

moves.forEach(move => {
    const [crates_to_move, moving] = move.split(' from ');
    const no_crates = Number(crates_to_move.replace('move ',''));
    const [origin, destination] = moving.split(' to ').map(Number);
    // for (let i=1; i<=no_crates; i++) {
    //     const crate = crates[origin].pop();
    //     crates[destination].push(crate);
    // }
    const crates_moving = crates[origin].splice(0-no_crates, no_crates)
    crates[destination].push(...crates_moving);
})

console.log(Object.values(crates).reduce((a, b) => a.concat(b.pop()), ''));