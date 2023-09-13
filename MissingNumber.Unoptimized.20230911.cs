using System;
using System.Collections;
using System.Collections.Generic;
					
public class Program
{
	// Find the Missing Number
	// Given an array containing n distinct numbers taken from the range [0, n], find the missing number.
	// Example: Input [3, 7, 1, 2, 8, 4, 5], Output 6
	public static void Main()
	{
		var nums = new int[] { 3, 7, 1, 2, 8, 4, 5 };
		
		var missingNumber = GetMissingNumber(nums);
		
		missingNumber.Dump();
	}
	
	public static int GetMissingNumber(int[] nums) 
	{
		var sortedSet = new List<int>(nums);
		
		sortedSet.Sort();
		
		for(var x = 0; x < sortedSet.Count; x++)
		{
			if(x > 0) 
			{
				var currentNumber = sortedSet[x];
				var previousNumber = sortedSet[x-1];
				if(Math.Abs(currentNumber - previousNumber) > 1) 
				{
					// Difference between current element and previous element is greater than 1
					return currentNumber - 1;
				}
			}
		}
		
		return -1;
	}
}