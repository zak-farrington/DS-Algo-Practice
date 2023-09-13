public class Solution
{
	public int MajorityElement(int[] nums)
	{
		var majorityHashMap = new Dictionary<int, int>();

		var highestIndex = 0;
		for(var idx = 0; idx < nums.Length; idx++) 
		{
			if(majorityHashMap.ContainsKey(nums[idx]))
			{
				majorityHashMap[nums[idx]] = majorityHashMap[nums[idx]] + 1; 
			}
			else
			{
				majorityHashMap[nums[idx]] = 1;
			}

			if(majorityHashMap[nums[idx]] > majorityHashMap[nums[highestIndex]])
			{
				highestIndex = idx;
			}
		}

		return nums[highestIndex];
	}
}