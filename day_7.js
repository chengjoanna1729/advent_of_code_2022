const fs = require('fs');

const commands = fs.readFileSync('./inputs/day_7.txt', 'utf-8').split('\r\n\$ ').map(line => line.split('\r\n'));

let directory = {};
let current_path = [];

const get_dir = (path) => {
    return path.reduce((dir, name) => dir[name], directory);
}

commands.forEach(command => {
    if (command[0].slice(0,2) == 'cd') {
        if (command[0].slice(-2) == '..') {
            current_path.pop();
        } else {
            const folder = command[0].replace('cd ','');
            current_path.push(folder);
        }
    } else {
        const current = get_dir(current_path);
        command.slice(1).forEach(el => {
            if (el.slice(0,3) == 'dir') {
                const dir = el.replace('dir ','');
                current[dir] = {};
            } else {
                const [file_size, file_name] = el.split(' ');
                current[file_name] = Number(file_size);
            }
        })
    }
})

let sizes_within_max = 0;
let sizes = [];
const get_size = (ob) => {
    let size = 0;
    Object.values(ob).forEach(el => {
        if (typeof el == 'number') {
            size += el;
        } else {
            size += get_size(el);
        }
    })
    if (size < 100000) {
        sizes_within_max += size;
    }
    sizes.push(size);
    return size;
}

const dict_size = get_size(directory);
const necessary_space = 30000000 - (70000000 - dict_size);
console.log(sizes_within_max);

console.log(Math.min(...sizes.filter(size => size >= necessary_space)));
