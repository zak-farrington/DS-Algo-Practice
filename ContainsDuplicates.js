// Solution 1
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var set = [...new Set(nums)];
	return set.length != nums.length;
};

// Solution 2
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {};
    nums.forEach(num => {
        map[num] = (map[num] ?? 0) + 1;
    })
   var values = Object.keys(map).map(index => map[index]);
    return values.filter(v => v > 1)?.length > 0;
};


console.log(containsDuplicate([1,2,3,1]));
