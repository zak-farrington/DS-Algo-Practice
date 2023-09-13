using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
					
public class Program
{
	public static void Main()
	{
		var chocolatePackages = new int[] { 5, 7, 23, 30, 2 };
		var childCount = 4;
		
		var chocolateDistribution = GetChocolateDistribution(chocolatePackages, childCount);
		
		Console.WriteLine($"Chocolate distribution results: {String.Join(", ", chocolateDistribution)}");
		chocolateDistribution.Dump();
	}
	
	// Given chocolates, distribute evenly to children.
	public static int[] GetChocolateDistribution(int[] chocolatePackages, int childCount) 
	{
		if(childCount < 1) 
		{
			throw new Exception("No children to distribute chocolates to.");
		}	
		
		var childrenHashMap = GetEmptyChildrenHashMap(childCount);
		
		// Loop through packages
		foreach(var chocolates in chocolatePackages) 
		{
			// First child gets chocolates by default
			var currentChild = 1;
			// Loop through chocolates
			for(var x = 0; x < chocolates; x++)
			{
				// currentChild has exceeded childCount, reset back to 1;
				if(currentChild > childCount) 
				{
					currentChild = 1;
				}
				
				if(childrenHashMap.ContainsKey(currentChild)) 
				{
					// Increase amount of chocolates that kid has.
					childrenHashMap[currentChild] = childrenHashMap[currentChild] + 1;
				}
				
				currentChild++;
			}
			
		}
		
		return childrenHashMap.Values.Select(v => v).ToArray();
	}
	
	private static Dictionary<int, int> GetEmptyChildrenHashMap(int numberOfChildren) 
	{
		var childrenHashMap = new Dictionary<int, int>();
		for(var y = 1; y <= numberOfChildren; y++)
		{
			childrenHashMap.Add(y, 0);
		}
		
		return childrenHashMap;
	}
		
}