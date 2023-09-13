public class Solution 
{
    public void Rotate(int[][] matrix) 
    { 
        int rowCount = matrix.Length;
        int colCount = matrix[0].Length;

		// Transposing a Matrix involves reversing the rows and columns.
		// With a jagged array, this must be done with seperate loops for the columns and rows.
        int[][] transposedMatrix = new int[colCount][];
		for (int i = 0; i < colCount; i++)
		{
			transposedMatrix[i] = new int[rowCount];
		}

		for (int row = 0; row < rowCount; row++)
		{
			for (int col = 0; col < colCount; col++)
			{
				transposedMatrix[col][row] = matrix[row][col];
			}
		}

		// For 90 degree rotation, reverse each row after transposing.
		for(var ridx = 0; ridx < transposedMatrix.Length; ridx++)  
		{
			transposedMatrix[ridx] = transposedMatrix[ridx].Reverse().ToArray();
		}
		
		for(var row = 0; row < rowCount; row++) 
		{
			for (var col = 0; col < colCount; col++)
			{
				matrix[row][col] = transposedMatrix[row][col];
			}
		}
	}
}
