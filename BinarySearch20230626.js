
function binarySearch(array, valueToFind) {
    let low = 0;
    let high = array.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(array[mid] === valueToFind) {
            console.log("Index is", mid);
            return mid;
        }
        else if(array[mid] < valueToFind) {
            low = mid + 1;
        }
        else if(array[mid] > valueToFind) {
            high = mid - 1;
        }
    }
    return -1;  // Return -1 if value not found
}


const array = [12,11,7,2,5,8,14,1]?.sort((a, b) => a-b);


console.log("Binary Search", binarySearch(array, 7))