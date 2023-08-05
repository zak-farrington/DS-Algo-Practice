/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const red = 0;
    const white = 1;
    const blue = 2;
    
    
    const reds = [];
    const whites = [];
    const blues = [];
    
    for(var x = 0; x < nums.length; x++) {
        // start to build new array first
        if(nums[x] === red) {
            reds.push(nums[x]);
        } 
        else if(nums[x] === white)
        {
            whites.push(nums[x]);
        }
        else if(nums[x] === blue)
        {
            blues.push(nums[x]);
        }
    }
    nums = reds.concat(whites).concat(blues);
    console.log("nums", nums);
};

sortColors([2,0,2,1,1,0]);