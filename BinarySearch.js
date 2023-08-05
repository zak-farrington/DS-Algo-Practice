var array = [0,5,7,8,9,10,11,12,13,14,27,50,73];


var toFind = 10;


var found = false;
var foundIndex = null;


var low = 0;
var high = array.length - 1;  // indexes start at 0

// Binary Search O(log n)
console.log(low, high);
while(low <= high)
{
    // start in the middle of the array; divide the sarch space into two havles by finding mid
    var mid = Math.floor((low + high) / 2);
    
    if(array[mid] == toFind)
    {
        found = true;
        foundIndex = mid;
        break;
    }
    else if(array[mid] < toFind)
    {
        // value is less than what we're looking for
        low = mid + 1;
    }
    else
    {
        // value is grater than what we're looking for
        high = mid - 1;
    }
}


console.log(found, mid);