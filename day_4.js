const fs = require('fs');

const pairs = fs.readFileSync('./inputs/day_4.txt', 'utf-8').split('\r\n');

const ranges = pairs.map(pair => pair.split(','));

let contained = 0;
ranges.forEach(range => {
    let dict_1 = []
    let dict_2 = []
    const range1 = range[0].split('-');
    for (let i=Number(range1[0]); i<=Number(range1[1]); i++) {
        dict_1.push(i);
    }
    const range2 = range[1].split('-');
    for (let i=Number(range2[0]); i<=Number(range2[1]); i++) {
        dict_2.push(i);
    }
    if (dict_1.some(el => dict_2.includes(el)) || dict_2.some(el => dict_1.includes(el))) {
        contained += 1;
    }
})
console.log(contained);