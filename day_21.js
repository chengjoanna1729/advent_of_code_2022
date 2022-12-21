const fs = require('fs');

const monkeys = fs.readFileSync('./inputs/day_21.txt', 'utf-8').split('\r\n');

const monkey_map = new Map();
monkeys.forEach(monkey => {
    const monkey_name = monkey.slice(0,4);
    const monkey_command = monkey.slice(6);
    if (!isNaN(Number(monkey_command))) {
        monkey_map.set(monkey_name, Number(monkey_command));
    } else {
        const dependents = monkey_command.split(' ');
        monkey_map.set(monkey_name, dependents);
    }
})

const child_to_change = 'qpct';
const value_to_hit = 37175119093215;

// hacky manual binary search led us here
for (i=3592056840000;i<3592056850000;i++) {
    const solve_monkey = (name) => {
        const value = monkey_map.get(name);
        if (typeof value == 'number') {
            if (name == 'humn') {
                return i;
            }
            return value;
        } else {
            const operation = value[1];
            const monkey_1_val = solve_monkey(value[0]);
            const monkey_2_val = solve_monkey(value[2]);
            switch (operation) {
                case '+':
                    return monkey_1_val + monkey_2_val;
                case '-':
                    return monkey_1_val - monkey_2_val;
                case '*':
                    return monkey_1_val * monkey_2_val;
                case '/':
                    return monkey_1_val / monkey_2_val;
                default:
            }
        }
    }

    if (solve_monkey(child_to_change) == value_to_hit) {
        console.log(i);
        break;
    }
}