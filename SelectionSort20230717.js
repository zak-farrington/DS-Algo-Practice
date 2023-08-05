// Selection Sort
// Average time complexity is O(n^2)
// Still twice as fast as Bubble Sort because of less inserts
const selectionSort = array => {

    for(let x = 0; x < array.length; x++) {
        let lowestIndexSoFar = x;
        for(let y = x + 1; y < array.length; y++) {
            if(array[y] < array[lowestIndexSoFar]) {
                lowestIndexSoFar = y; 
            }
        }
        if(lowestIndexSoFar != x)  {
            // Lowest index is different than x, let's swap
            const toCopyRight = array[x];
            array[x] = array[lowestIndexSoFar];
            array[lowestIndexSoFar] = toCopyRight;
        }
    }
    return array;
} 

console.log(selectionSort([4,2,1,3,5]));