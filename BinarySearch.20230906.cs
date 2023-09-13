public class Solution
{
	public int Search(int[] nums, int target)
	{
		var low = 0;
		var high = nums.Length-1;

		int foundIndex = -1;

		while (low <= high)
		{
			var mid = (low + high) / 2;

			if(nums[mid] == target)
			{
				// Index found.
				foundIndex = mid;
				break;
			}
			// Number at mid is greater, so target must be to the left
			else if(nums[mid] > target)
			{
				high = mid-1;
			}
			// Number at mid is less, so target must be to the right
			else if(nums[mid] < target)
			{
				low = mid+1;
			}
		}

		return foundIndex;
	}
}