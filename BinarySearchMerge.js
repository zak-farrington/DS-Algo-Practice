/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Use binary earch O(log n) algorithm

    var low = 0;
    var high = nums.length - 1;

    if(nums.length === 1 && nums[0] === target)
    {
        return 0;
    }
    else {
        while(low <= high)
        {
            var midIndex = Math.floor((low + high) / 2);
            var midNumber = nums[midIndex];

            if(midNumber === target) {
                return midIndex;
            }
            else if(midNumber < target)
            {
                // Mid number is less than target, so move right
                low = midIndex + 1;
            }
            else if(midNumber > target)
            {
                // Mid number is greater than target, so move left
                high = midIndex - 1;
            }
        }
    }

    return -1;
};