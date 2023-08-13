// Selection Sort Algorithm
// Average time complexity O^2

const selectionSort = (array) => {
    for(let x = 0; x < array.length; x++) {
        let lowestSortedIndex = x;

        // inner loop
        for(let y = lowestSortedIndex + 1; y < array.length; y++) {
            if(array[y] < array[lowestSortedIndex]) {
                lowestSortedIndex = y;
            }
        }

        if(lowestSortedIndex != x) {
            // swap
            const toMoveRight = array[x];
            array[x] = array[lowestSortedIndex];
            array[lowestSortedIndex] = toMoveRight;
        }
    }
    return array;
}

console.log(selectionSort([5,4,2,1]));