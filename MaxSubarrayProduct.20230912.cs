using System;
					
public class Program
{
	// Max Product Subarray: Given an integer array, find the contiguous subarray that has the maximum product.
	// Example: Input [2, 3, -2, 4], Output 6
	public static void Main()
	{
		var inputArray = new int[] { 2, 3, -2, 4 };
		
		var maxProduct = GetMaxSubarrayProduct(inputArray);
		
		maxProduct.Dump();
	}
	
	public static int GetMaxSubarrayProduct(int[] array) 
	{
		var totalMaxProduct = int.MinValue;
		
		for(var start = 0; start < array.Length; start++)
		{
			int currentProduct = 1;
			for(var end = start; end < array.Length; end++) 
			{
				currentProduct *= array[end];
				if (currentProduct > totalMaxProduct)
            	{
                	totalMaxProduct = currentProduct;
            	}
			}
		}
	
		return totalMaxProduct;
	}	
}