// Binary Search
// 1. Use two pointers high and low to find mid.
// 2. Check if value at mid is equal to valueToFind
// 3. If not found and value is greater, then reduce high to be equal to our mid point minus one (this is halfing - O (log n))
// 4. If not found and value is less, then increase low to be equal to our mid point plus one (this is halfing - O (log n))

// Binary Search is O(log n) in terms of time complexity
const binarySearch = (array, valueToFind) => {

    let high = array.length;
    let low = 0;

    while(low <= high){
        const mid = Math.floor((high + low) / 2);
        if(array[mid] === valueToFind) {
            return mid;
        }
        else if(array[mid] > valueToFind) {
            // value at mid is greater, so decrease
            high = mid - 1;
        }
        else if(array[mid] < valueToFind) {
            // value at mid is less, so we need to increase
            low = mid + 1;
        }

    }

    return null;
}


console.log(binarySearch([1,2,3,4,5,6,7,8], 6));