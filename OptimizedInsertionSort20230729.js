// Insertion Sort
// Starts at end of arrayToSort.length to avoid unneccessary comparisons.  
// Slightly more optimal than traditional Insertion Sort.
// Average Time Compelxity O^2

const insertionSort = (arrayToSort) => {

    let sortComparisonIndex = 0;
    for(let currentIndex = 0; currentIndex < arrayToSort.length; currentIndex++) {
        sortComparisonIndex = arrayToSort.length; // compare from end 
        while(sortComparisonIndex > currentIndex) {
            sortComparisonIndex--;
            if(arrayToSort[sortComparisonIndex] < arrayToSort[currentIndex]) {
                const toCopyLeft = arrayToSort[sortComparisonIndex];
                arrayToSort[sortComparisonIndex] = arrayToSort[currentIndex];
                arrayToSort[currentIndex] = toCopyLeft;
            }
        }
    }
    return arrayToSort;
}

console.log(insertionSort([5,7,1,8,9]));