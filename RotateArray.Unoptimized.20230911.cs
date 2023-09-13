using System;
using System.Collections;
using System.Collections.Generic;

public class Program
{
	// Array Rotation
	// Write a function that rotates an array k times. For example, [1, 2, 3, 4] rotated twice would be [3, 4, 1, 2].

	// Example: Input [1, 2, 3, 4], 2, Output [3, 4, 1, 2]
	
	public static void Main()
	{

		var inputArray = new int [] { 1, 2, 3, 4 };
		
		var rotatedArray = RotateArray(new List<int>(inputArray), 2);
		
		rotatedArray.Dump();
	}
	
	public static List<T> RotateArray<T>(List<T> array, int numOfRotations)
	{
		// Shallow copy 
		var rotatedArray = new List<T>(array);
		var arrayLength = rotatedArray.Count;
		
		for(var x = 0; x < numOfRotations; x++) 
		{
			// Save first and last value since we will rotate it
			
			var firstValue = rotatedArray[0];
			
			rotatedArray.RemoveAt(0);
			rotatedArray.Insert(arrayLength - 1, firstValue);
		}	
	
		return rotatedArray;
	}
}