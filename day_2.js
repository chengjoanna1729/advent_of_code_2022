const fs = require('fs');

const mapping = {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissors',
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win',
}

const score_map = {
    'rock': 1,
    'paper': 2,
    'scissors': 3,
}

const rounds = fs.readFileSync('./inputs/day_2.txt', 'utf-8').split('\r\n');
const round_split = rounds.map(round => ({ opponent: mapping[round[0]], own: mapping[round[2]] }));

let score = 0;
// round_split.forEach(round => {
//     if (round.opponent == round.own) {
//         score += (3+score_map[round.own]);
//         return;
//     }
//     if (round.opponent == 'rock') {
//         if (round.own == 'paper') {
//             score += (6+score_map[round.own]);
//             return;
//         } else {
//             score += score_map[round.own];
//             return;
//         }
//     }
//     if (round.opponent == 'paper') {
//         if (round.own == 'scissors') {
//             score += (6+score_map[round.own]);
//             return;
//         } else {
//             score += score_map[round.own];
//             return;
//         }
//     }
//     if (round.opponent == 'scissors') {
//         if (round.own == 'rock') {
//             score += (6+score_map[round.own]);
//             return;
//         } else {
//             score += score_map[round.own];
//             return;
//         }
//     }
// })

round_split.forEach(round => {
    if (round.opponent == 'rock') {
        if (round.own == 'lose') {
            score += score_map['scissors'];
            return;
        } else if (round.own == 'draw') {
            score += (3+score_map['rock']);
            return;
        } else {
            score += (6+score_map['paper']);
            return;
        }
    }
    if (round.opponent == 'paper') {
        if (round.own == 'lose') {
            score += score_map['rock'];
            return;
        } else if (round.own == 'draw') {
            score += (3+score_map['paper']);
            return;
        } else {
            score += (6+score_map['scissors']);
            return;
        }
    }
    if (round.opponent == 'scissors') {
        if (round.own == 'lose') {
            score += score_map['paper'];
            return;
        } else if (round.own == 'draw') {
            score += (3+score_map['scissors']);
            return;
        } else {
            score += (6+score_map['rock']);
            return;
        }
    }
})

console.log(score);