using System;
using System.Collections;
using System.Collections.Generic;
					
public class Program
{
	// Longest Substring Without Repeating Characters
	// Write a function that takes a string and returns the length of the longest substring without repeating characters.
	// Example: Input "abcabcbb", Output 3
	public static void Main()
	{
		var longestNonRepeatingSubstringCount = FindLongestNonRepeatingSubstring("abcabcbb");
		Console.WriteLine($"Longest non repeating substring count is: {longestNonRepeatingSubstringCount}");
		
		Console.WriteLine("===========================================");
		var longestNonRepeatingSubstringCount2 = FindLongestNonRepeatingSubstring("tmmzuxt");
		Console.WriteLine($"Longest non repeating substring count is: {longestNonRepeatingSubstringCount2}");
	}
	
	public static int FindLongestNonRepeatingSubstring(string theString)
	{
		var start = 0;
		var maximumSubstringCount = 0;
		var charsSeenDict = new Dictionary<char, int>();
		
		for(var end = 0; end < theString.Length; end++) 
		{
			var currentChar = theString[end];
			if(charsSeenDict.ContainsKey(currentChar)) 
			{
				// Char has already been encountered,
				start = Math.Max(start, charsSeenDict[currentChar] + 1);
				charsSeenDict.Remove(currentChar);
			}
			maximumSubstringCount = Math.Max(maximumSubstringCount, end - start + 1);
			charsSeenDict[currentChar] = end;
		}
		
		return maximumSubstringCount;
	}
}