void Main()
{
}

public class Program
{

	// Find All Anagrams in a String
	// Given two strings s and p, find all the start indices of p's anagrams in s. Strings consist of lowercase English letters only and the order of the characters in p does not matter.

	// Example:

	// Input:
	// s: "cbaebabacd"
	// p: "abc"

	// Output:
	// [0, 6]

	// Explanation:
	// The substring with start index = 0 is "cba", which is an anagram of "abc".
	// The substring with start index = 6 is "bac", which is an anagram of "abc".
	public static void Main()
	{
		var result = FindAllAnagramIndexes("cbaebabacd", "abc");

		result.Dump();
	}

	private static int[] FindAllAnagramIndexes(string word, string substring)
	{
		var startingIndexList = new List<int>();

		// Create hashmap right away of how many chars our substring has
		var substringHashMap = new Dictionary<char, int>();

		foreach (var chr in substring)
		{
			if (substringHashMap.ContainsKey(chr))
			{
				substringHashMap[chr] += 1;
			}
			else
			{
				substringHashMap[chr] = 1;
			}
		}

		// Keep left pointer for window
		var left = 0;

		// Loop through characters of string and maintain sliding window of substring.Length
		var currentWindowHashMap = new Dictionary<char, int>();
		for (var right = 0; right < word.Length; right++)
		{
			if (currentWindowHashMap.ContainsKey(word[right]))
			{
				// Increase current character count in our hashmap
				currentWindowHashMap[word[right]] = currentWindowHashMap[word[right]] + 1;
			}
			else
			{
				// Log 1 occurrence for our current character
				currentWindowHashMap.Add(word[right], 1);
			}

			if ((right - left) >= substring.Length)
			{
				// We have exceeded our window, which is length of the substring, so we need to remove characters from hashmap
				if (currentWindowHashMap[word[left]] == 1)
				{
					// Only 1 occurence, remove it now
					currentWindowHashMap.Remove(word[left]);
				}
				else
				{
					// Decrease character count of character falling out of our window
					currentWindowHashMap[word[left]] = currentWindowHashMap[word[left]] - 1;
				}
				left++;
			}

			if ((right - left + 1) == substring.Length)
			{
				// We have exactly 3 characters, let's see if we have everything we need in our hashmap to build substring
				var isAnagram = currentWindowHashMap.All(k => substringHashMap.ContainsKey(k.Key) && substringHashMap[k.Key] == k.Value);
				if (isAnagram)
				{
					// Add left, which is the starting index
					startingIndexList.Add(left);
				}
			}
		}

		return startingIndexList.ToArray();
	}
}