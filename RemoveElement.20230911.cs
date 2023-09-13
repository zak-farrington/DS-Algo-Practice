public class Solution 
{
    public int RemoveElement(int[] nums, int val)
	{
        // Create pointer at beginning
        int pointerA = 0;
        // Creater pointer at end
        int pointerB = nums.Length - 1;

        while(pointerA <= pointerB)
        {
            if(nums[pointerA] == val) 
            {
                // Update location A with value at location B;
                nums[pointerA] = nums[pointerB];
                // Decrease pointerB location
                pointerB--;
            }
            else 
            {
                pointerA++;
            }
        }
       
        return pointerA;
	}

}