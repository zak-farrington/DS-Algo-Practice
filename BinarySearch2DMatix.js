// O(log(m * n)) solution
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    var maxRow = matrix.length;
    var maxColumn = matrix[0].length ;
    
    var low = 0;
    var high = (matrix.length * matrix[0].length) - 1;

    while(low <= high)
    {
        const mid = Math.floor((low + high) / 2);
        const row = Math.floor(mid / maxColumn);
        const column = mid % maxColumn;

        const currentMatrixNumber = matrix[row][column];

        if(currentMatrixNumber === target) {
            return true;
        }
        else if(currentMatrixNumber < target)
        {
            // Number is less than target, so move right
            low = mid + 1;
        }
        else if(currentMatrixNumber > target)
        {
            // Number is greater than target, so move left
            high = mid - 1;
        }
    }

    return false;
};

// Brute Force solution
// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function(matrix, target) {
    
//     var maxRow = matrix.length - 1;
//     var maxColumn = matrix[0].length - 1;
    
//     var column = 0;
//     var row = 0;

//     while(row < maxRow && column < maxColumn)
//     {
//         if(matrix[row][column] === target) {
//             return true;
//         }
//         if(column === maxColumn) {
//             row++;
//             column = 0;
//         }
//         else {
//             column++;
//         }

//     }

//     return false;
// };