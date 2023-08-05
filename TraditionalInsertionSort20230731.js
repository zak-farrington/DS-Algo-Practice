// Insertion Sort Algo
// Average Time Complexity (O^2)
const insertionSort = (arrayToSort) => {
    let insertionIndex = 0;
    for(let x = 1; x < arrayToSort.length; x++) {
        const currentValue = arrayToSort[x];
        insertionIndex = x - 1;
        // TODO: Need to visualize this again
        while(insertionIndex >= 0 && arrayToSort[insertionIndex] > currentValue) {
            // move to the right
            // Value is greater than currentValue, move it to the right
            arrayToSort[insertionIndex+1] = arrayToSort[insertionIndex];
            insertionIndex--;
        }
        arrayToSort[insertionIndex + 1] = currentValue;
    }

    return arrayToSort;
}

console.log(insertionSort([5,1,2,3,5,7]));  