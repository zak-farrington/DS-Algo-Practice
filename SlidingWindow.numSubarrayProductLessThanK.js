/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
     let left = 0, right = 0, currentProduct = 1;

    let totalSubArrayCount = 0;

    while(right < nums.length) {
        currentProduct *= nums[right];
        // console.log("===== START =====");
        // console.log("currentProduct:", currentProduct);
        // console.log("left,right:", `${left},${right}`);

        while(currentProduct >= k && left <= right) {
            // console.log("PRODUCT: TOO HIGH");
            // console.log("- sliding left++ and reducing product");
            currentProduct /= nums[left];
            left++;
        }

        if(currentProduct < k) {
            // console.log("PRODUCT: VALID");(right - left) + 1;
            // console.log(" - adding (right - left) + 1:", (right - left) + 1);
            totalSubArrayCount += (right - left) + 1;
        }

        right++;
    }

    return totalSubArrayCount;
};