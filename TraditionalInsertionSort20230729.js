// Traditional Insertion Sort
// Average Time Compelxity O^2

const insertionSort = (arrayToSort) => {

    let insertionIndex = 0;
    for(let currentIndex = 1; currentIndex < arrayToSort.length; currentIndex++) {
        const currentElement = arrayToSort[currentIndex];
        insertionIndex = currentIndex - 1; // start one behind outer loop 

        while(insertionIndex >= 0 && arrayToSort[insertionIndex] > currentElement) {
            // Move that suckerarrayToSort[insertionIndex] to the right
            arrayToSort[insertionIndex+1] = arrayToSort[insertionIndex];
            insertionIndex--;
        }

        arrayToSort[insertionIndex + 1] = currentElement;
    }

    return arrayToSort;
}

console.log(insertionSort([5,7,1,8,9]));