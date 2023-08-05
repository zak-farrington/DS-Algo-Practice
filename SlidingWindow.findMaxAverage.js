/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0, right = 0;
    let currentTotal = 0;
    let highestAverage = -Infinity;
    
    if(nums.length === 1 && k === 1)
    {
        return nums[0];
    }
    
    while(right < nums.length) {
        
        const window = right - left + 1;
        currentTotal += nums[right];

        if(window === k) {
            const currentAverage = currentTotal / k;
            highestAverage = Math.max(highestAverage, currentAverage);
            currentTotal -= nums[left];
            left++;
        }
    
        
        right++;
    }
    
    return highestAverage;
};