// Insertion Sort
const insertionSort = (array) => {
    // Iterating over each element in the array, starting from the second one
    for(let outerIndex = 1; outerIndex < array.length; outerIndex++) {
        // The value that we are attempting to insert in the correct position within the sorted portion of the array
        const valueToInsert = array[outerIndex];
        // Starting the inner loop at the position before the outerIndex
        let innerIndex = outerIndex - 1; 

        // Keep moving to the left in the sorted portion of the array
        // until we find the correct spot for valueToInsert
        while(innerIndex >= 0 && array[innerIndex] > valueToInsert) {
            // Shift the larger value to the right
            array[innerIndex+1] = array[innerIndex];
            // Move to the next element in the sorted portion of the array
            innerIndex--;
        }

        // We've exited the loop, so we've found the spot where valueToInsert
        // should be inserted to keep the sorted portion of the array in order
        array[innerIndex + 1] = valueToInsert;
    }
    return array;
}

console.log("Insertion sort");
console.log(insertionSort([4,2,7,1,3]));
