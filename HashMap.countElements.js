/*
Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. 
If there are duplicates in arr, count them separately.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    
    const map = {};
    let validNums = 0;
    
    for(let x = 0; x < arr.length; x++) {        
        map[arr[x]] = true;
    }
    
     for(let x = 0; x < arr.length; x++) {        
        if(map[arr[x]] && map[arr[x] + 1])
        {
            validNums++;      
        }
    }
    

    return validNums;
};