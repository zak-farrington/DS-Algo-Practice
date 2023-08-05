// Selection Sort Sort Algorithm
// Average time Complexity O(n^2) 

const selectionSort = (arrayToSort) => {

    for(let sortedIndex = 0; sortedIndex < arrayToSort.length; sortedIndex++) {
        let lowestIndexSoFar = sortedIndex; // Always reset lowest index so far to the most recently sorted sortedIndex (where start in our outer loop)
        for(let x = sortedIndex; x < arrayToSort.length; x++) {
            // Compare inner loop iterration location with lowestIndex so far
            if(arrayToSort[x] < arrayToSort[lowestIndexSoFar]) {
                lowestIndexSoFar = x;
            }
        }

        // swap lowestIndex so far with sortedIndex
        if(sortedIndex !== lowestIndexSoFar) {
            const toCopyLeft = arrayToSort[lowestIndexSoFar];
            arrayToSort[lowestIndexSoFar] = arrayToSort[sortedIndex];
            arrayToSort[sortedIndex] = toCopyLeft;
        }
    }

    return arrayToSort;
}


console.log(selectionSort([6,7,1,2,5,10]));