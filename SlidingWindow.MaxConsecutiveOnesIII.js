/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {

    let left = 0, right = 0;
    let maxWindowSize = 0;
    let currentZerosInWindow = 0;

    while(right <= nums.length -1) {
        if(nums[right] == 0) {
            currentZerosInWindow++;
        }     
        if(currentZerosInWindow > k)  {
            if(nums[left] == 0){
                currentZerosInWindow--;
            }
            left++;
        }

        if(currentZerosInWindow <= k) {
            const currentWindowSize = right - left + 1;
            maxWindowSize = Math.max(maxWindowSize, right - left + 1);
        }
        right++;
    }

    return maxWindowSize;
};
