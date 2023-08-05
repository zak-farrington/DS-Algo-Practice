// Bubble Sort

const bubbleSort = (array) => {
    let unsortedIndex = array.length - 1; // Begin at end of array 

    while(unsortedIndex > 0) {
        for(let x = 0; x < array.length - 1; x++) {
            if(array[x] > array[x+1]) {
                // array[x] is greater than array[x+1].
                // array[x] must move to the right of array[x+1] (SWAP)
                const toMoveLeft = array[x+1];
                array[x+1] = array[x]; 
                array[x] = toMoveLeft;
            }
        }
        unsortedIndex--;
        //decrement and perform another pass
    }

    return array;
}


const sortedArray = bubbleSort([2,7,4,1]);

console.log(sortedArray);