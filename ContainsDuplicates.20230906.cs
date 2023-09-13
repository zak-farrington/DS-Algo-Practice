public class Solution
{
	public bool ContainsDuplicate(int[] nums)
	{
		var intSet = new HashSet<int>();

		foreach (int x in nums)
		{
			if (intSet.Contains(x))
			{
				return true;
			}
			else
			{
				intSet.Add(x);
			}
		}
		return false;
	}
}
