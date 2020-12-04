/**
 * @param {number[][]} matrix
 // * @return {void} Do not return anything, modify matrix in-place instead./
 */

function rotate(matrix) {
    const len = matrix.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let temp = matrix[i].pop()
            matrix[len - j - 1].unshift(temp)
        }
    }
    // return 仅用于测试用例 提交时移除
    return matrix;
}

export default rotate;

