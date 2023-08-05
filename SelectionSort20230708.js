// Selection sort
// Go through the array and keep track of the lowest number's index
// If we find a number lower than where we started, we swap that number with the number we started our pass through with

// Selection Sort Best:         O((n^2 /2)) but O(n^2) because Big O Notation ignores constants
// Selection Sort Average:      O((n^2 /2)) but O(n^2) because Big O Notation ignores constants
// Selection Sort Worst:        O((n^2 /2)) but O(n^2) because Big O Notation ignores constants
// Selection Sort Space:        O(1) 

// Still twice as fast than bubble sort because we only make 1 swap per pass instead of multiple swaps


const selectionSort = (array = []) => {
    // x = starting index number for our pass
    // y = current index for iterration within the pass
    for(let x = 0; x < array.length - 1; x++) {
        let lowestNumberIndex = x;
        // We always start the pass 1 index ahead
        // This is a O(n squared) operation
        for(let y = x + 1;  y < array.length; y++) {
            if(array[y] < array[lowestNumberIndex]) {
                // New lowest number array
                lowestNumberIndex = y;
            }
        }

        if(lowestNumberIndex != x) {
            let oldLowestNumber = array[x];
            array[x] = array[lowestNumberIndex];
            array[lowestNumberIndex] = oldLowestNumber;
        }
    }

    return array;
};


console.log(selectionSort([4,2,7,1,3]));