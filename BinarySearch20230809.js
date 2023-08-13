// Binary Search
// O (n log n) 

const binarySearch = (array, numToFind) => {

    let low = 0
    let high = array.length-1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(array[mid] === numToFind) {
            return mid;
        }
        else if(array[mid] < numToFind) {
            // Number at mid is less than numToFind,
            low = mid + 1;

        }
        else if(array[mid] > numToFind) {
            // Number at mid is greater than numToFind, discard right
            high = mid - 1;
        }
    }
}

console.log(binarySearch([4,5,6,7,8], 6));