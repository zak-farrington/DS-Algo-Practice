public class Solution
{
	public bool ContainsNearbyDuplicate(int[] nums, int k)
	{
		// inputs: num array of int
		// k: target sum less than k

		// Dictionary where key is index, and value is number;  
		var sumDict = new Dictionary<int, int>();

		// Mapped all my index -> value in sumDict
		for(int i = 0; i < nums.Length; i++)
		{
			if(sumDict.ContainsKey(nums[i]))
			{
				// We have equal integers
				var existingValueIndex = sumDict[nums[i]];
				
				if(Math.Abs(existingValueIndex - i) <= k) {
					return true;
				}
			}
			sumDict[nums[i]] = i;
		}
		
		return false;
	}
}


// nums: [1,0,1,1]
// k: 1


// first iterration
// i: 0
// num[i]: 1
// Action: Add 1 to sumDict where indice is 1

// second iterration
// i: 1
// num[i]: 0
// Action: Add 0 to sumDict where indice is 1

// first iterration
// i: 2
// num[i]: 1
// Action: sumDict has 1, subtract 2 - 0 
// 2 - 0 equals 2, which is not <= k

// first iterration
// i: 3
// num[i]: 1
