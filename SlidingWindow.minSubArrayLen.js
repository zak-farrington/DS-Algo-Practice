/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minimumLength = Number.MAX_SAFE_INTEGER;
    let left = 0, right = 0;
    let currentTotal = 0;

    while(right < nums.length) {
        // Add current number to currentTotal
        currentTotal += nums[right];

        console.log("currentTotal, left, right", currentTotal, left, right);

        // Include constraint within my while loop.  If currentTotal is greater or equal, then we can slide the window
        while(currentTotal >= target && left <= right) {
            const newMinimumLength = right - left + 1;
            console.log("Adding new minimum length", newMinimumLength);
            minimumLength = Math.min(minimumLength, right - left + 1);

            // Since left starts at 0, by time we have to get in here can start removing at nums[left]
            currentTotal -= nums[left];
            console.log("SLIDING, updated total", currentTotal);
            left++;
        }

        right++
    }

    return minimumLength != Number.MAX_SAFE_INTEGER ? minimumLength : 0;
};