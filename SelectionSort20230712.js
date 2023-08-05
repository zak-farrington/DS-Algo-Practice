// Selection sort
// Save pointer to lowest value so far each pass. 
// When we end the pass, swap the lowest number with the previous lowest number (which begins as the first one)
// O(n^2)

const selectionSort = (array) => {
    for(let x = 0; x < array.length; x++) {
        let lowestNumberIndex = x;
        for(let y = x + 1; y < array.length; y++) {
            if(array[y] < array[lowestNumberIndex]) {
                // Lower number found
                lowestNumberIndex = y;
            }
        }
        if(lowestNumberIndex != x) {
            const toMoveLeft = array[lowestNumberIndex];
            array[lowestNumberIndex] = array[x];
            array[x] = toMoveLeft;
        }
    }

    return array;
}


console.log(selectionSort([4,2,7,3,1]));