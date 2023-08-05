// Bubble Sort
// Switch two values moving the higher value to the right

const bubbleSort = (array) => {

    let unsortedIndex = array.length - 1;  // Define total number of iterrations we will need.  The outer loop is only needed so we know how many passes to make, which is O(n) passes.
    
    while(unsortedIndex > 0)  {
        for(let x = 0; x < unsortedIndex; x++){
            // Move through entire array
            if(array[x] > array[x+1]) {
                // If array[x] is greater than array[x+1], move array[x] to the right.
                const toMoveRight = array[x];
                array[x] = array[x+1];
                array[x+1] = toMoveRight;
            }
        }
        unsortedIndex--; // Decrease number of remaining passes.
    }
    return array;
}

console.log(bubbleSort([4,3,2,7,1]));