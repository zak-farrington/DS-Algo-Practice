// Selection Sort
// Keep tracking of lowest number and do something with it (like swap)
// Uses two loops

const selectionSort = (array) => {
    for(let x = 0; x < array.length - 1; x++) {
        let lowestNumberIndex = x;
        for(let y = x + 1; y < array.length; y++) {
            if(array[y] < array[lowestNumberIndex]) {
                // Number is less, save the index
                lowestNumberIndex = y;
            }
        }

        if(lowestNumberIndex !== x) {
            // Lowest number index has changed, do the swap
            const toSwapRight = array[x];
            array[x] = array[lowestNumberIndex];
            array[lowestNumberIndex] = toSwapRight;
        }
    }

    return array;
} 

console.log(selectionSort([5,4,1,3,2,6,7]));