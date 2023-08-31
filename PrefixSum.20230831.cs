// Written and tested with LINQPad

public int[] RunningSum(int[] nums)
{
	int[] prefixSum = new int[nums.Length];

	for (int x = 0; x < nums.Length; x++)
	{
		if (x == 0)
		{
			prefixSum[x] = nums[x];
		}
		else
		{
			prefixSum[x] = prefixSum[x - 1] + nums[x];
		}
	}

	return prefixSum;
}

public void Main()
{
	var numbers = new int[] { 1, 2, 3, 4 };
	
	RunningSum(numbers).Dump();
}