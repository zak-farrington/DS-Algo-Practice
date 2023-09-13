public class Solution
{
	public int[] TwoSum(int[] nums, int target)
	{

		var sumDict = new Dictionary<int, int>();

		// Return indices of the two numbers that add up to target
		// So there will be 

		// Loop and iterrate through nums
		for (int x = 0; x < nums.Length; x++)
		{
			var numberNeeded = target - nums[x];

            var containsKey = sumDict.ContainsKey(numberNeeded); 
			if (containsKey)
			{
				var existingIndex = sumDict[numberNeeded];
				return new int[] { existingIndex, x };
			}
			else if(!sumDict.ContainsKey(nums[x]))
			{
				sumDict.Add(nums[x], x);
			}
		}

		return new int[] { 0, 0 };
	}
}