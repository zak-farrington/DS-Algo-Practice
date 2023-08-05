// Insertion Sort 20230711
// Buddhism is the science of liberation 

const insertionSort = (array) => {
    // Insertion Sort always starts at index 1
    for(let currentIndex = 1; currentIndex < array.length; currentIndex++) {
        const currentNumberBeingSorted = array[currentIndex]; 
        let sortIndex = currentIndex - 1; // Sort begins behind our current number to be sorted
        while(sortIndex >= 0 && array[sortIndex] > currentNumberBeingSorted) {
            // Number at array[sortIndex] is greater, it must be moved right;
            array[sortIndex + 1] = array[sortIndex];
            sortIndex--;
        }

        array[sortIndex + 1] = currentNumberBeingSorted; // Set current sorted number to right of where we left off during sortIndex--;
    }
    return array;
}

console.log(insertionSort([4,7,2,1,3]));
