// Insertion Sort

const insertionSort = (array) => {

    for(let x = 1; x < array.length - 1; x++) {
        const currentNumberToSort = array[x];

        let unsortedIndex = x - 1; // Begins 1 behind x

        while(unsortedIndex >= 0 && array[unsortedIndex] > currentNumberToSort) {
            // number @ array[unsortedIndex] is greater than currentNumberToSort, it must be moved right
            array[unsortedIndex + 1] = array[unsortedIndex];
            unsortedIndex--;
        }
        array[unsortedIndex + 1] = currentNumberToSort;
    }

    return array;
}


console.log(insertionSort([5,4,2,1,5,6,8,10]));