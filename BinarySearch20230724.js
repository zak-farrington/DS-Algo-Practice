// Binary Search 

const binarySearch = (values, valueToFind) => {

    let low = 0;
    let high = values.length - 1;

    while(low <= high) 
    {
        let mid = Math.floor((low + high) / 2);

        if(values[mid] === valueToFind)  {
            // found at mid
            return mid;
        }
        else if(values[mid] < valueToFind) {
            // value @ mid is less than valueToFind
            // so discard what's on the left
            low = mid + 1;
        }
        else if(values[mid] > valueToFind) {
            // value @ mid is greater than value to find,
            // so discard what's on the right
            high = mid - 1;
        }
    }

    return -1;
}


console.log(binarySearch([2,3,4,5,6], 4));