const fs = require('fs');

const data_array = fs.readFileSync('./inputs/day_8.txt', 'utf-8').split('\r\n');

let visible_no = 0;
const no_trees = data_array.length;
for (i=0;i<no_trees;i++) {
    for (j=0;j<no_trees;j++) {
        if (i == 0 || j == 0 || i == no_trees-1 || j == no_trees-1) {
            visible_no += 1
        } else {
            const tree_height = Number(data_array[i][j]);
            let left_vis = true;
            for (k=0;k<i;k++) {
                if (Number(data_array[k][j])>=tree_height) {
                    left_vis = false;
                }
            }
            let right_vis = true;
            for (k=i+1;k<no_trees;k++) {
                if (Number(data_array[k][j])>=tree_height) {
                    right_vis = false;
                }
            }
            let up_vis = true;
            for (l=0;l<j;l++) {
                if (Number(data_array[i][l])>=tree_height) {
                    up_vis = false;
                }
            }
            let down_vis = true;
            for (l=j+1;l<no_trees;l++) {
                if (Number(data_array[i][l])>=tree_height) {
                    down_vis = false;
                }
            }
            if (left_vis || right_vis || up_vis || down_vis) {
                visible_no += 1;
            }
        }
    }
}
console.log(visible_no);

let max_score = 0;
for (i=0;i<no_trees;i++) {
    for (j=0;j<no_trees;j++) {
        if (i != 0 && i != no_trees-1 && j != 0 && j != no_trees-1) {
            const tree_height = Number(data_array[i][j]);
            let left_score = 1;
            for (k=i-1;k>=0;k--) {
                if (Number(data_array[k][j])>=tree_height) {
                    left_score = i-k;
                    break;
                }
                left_score = i;
            }
            let right_score = 1;
            for (k=i+1;k<no_trees;k++) {
                if (Number(data_array[k][j])>=tree_height) {
                    right_score = k-i;
                    break;
                }
                right_score = no_trees-i-1;
            }
            let up_score = 1;
            for (l=j-1;l>=0;l--) {
                if (Number(data_array[i][l])>=tree_height) {
                    up_score = j-l;
                    break;
                }
                up_score = j;
            }
            let down_score = 1;
            for (l=j+1;l<no_trees;l++) {
                if (Number(data_array[i][l])>=tree_height) {
                    down_score = l-j;
                    break;
                }
                down_score = no_trees-j-1;
            }
            const scenic_score = left_score*right_score*up_score*down_score;
            if (scenic_score>max_score) {
                max_score = scenic_score;
            }
        }
    }
}
console.log(max_score);