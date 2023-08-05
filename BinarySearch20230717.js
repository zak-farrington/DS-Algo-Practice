// Binary Search
// if >, high = mid - 1;
// if <, low = mid - 1;

const binarySearch = (array, toFind) => {

    let low = 0;
    let high = array.length;
    let mid = null

    while(high >= low) {
        mid = Math.floor((low + high) / 2);
        if(array[mid] === toFind) {
            return mid;
        }
        else if(array[mid] > toFind) 
        {
            // Value at mid is greater, so we must cut out everything to the right of mid
            high = mid - 1;
        }
        else if(array[mid] < toFind) {
            // value at mid is less, so we must cut out everything to the left of mid
            low = mid + 1;
        }
    }
    return null;
}

console.log(binarySearch([2,3,4,5,6,7,8], 10));