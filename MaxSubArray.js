/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var highestSum = nums[0];
    var currentSum = 0;
    
    for(var x = 0; x < nums.length; x++) {
        currentSum += nums[x];

        if(currentSum > highestSum)
        {
            highestSum = currentSum;
        }

        if(currentSum < 0) {
             // Prevent negaitve sum
            currentSum = 0;
        }
    
    }
    
    return highestSum;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));  