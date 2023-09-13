public class Solution
{
    private int [][] Grid { get;set; }
	private int GridDimensionRows { get; set; }
	private int GridDimensionCols { get; set; }
	// Input: m x n grid
	// Desc: Each cell can have one of three values
	//       0: Empty cell
	//       1: Fresh Orange
	//       2: Rotten Orange
	//
	// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

	// What is 4 directional adjacent?  1 Square above, below, left or right.

	// I am dealing with a grid.
	//
	// 
	// Return value: elapse time till rotten.

	public enum OrangeType
	{
		None,
		Fresh,
		Rotten
	};

    
   public bool IsRottenAdjacent(int yRow, int xCol)
{
    // Check above
    if (yRow - 1 >= 0 && Grid[yRow - 1][xCol] == (int)OrangeType.Rotten) {
        return true;
    }
    // Check below
    if (yRow + 1 < GridDimensionRows && Grid[yRow + 1][xCol] == (int)OrangeType.Rotten) {
        return true;
    }
    // Check left
    if (xCol - 1 >= 0 && Grid[yRow][xCol - 1] == (int)OrangeType.Rotten) {
        return true;
    }
    // Check right
    if (xCol + 1 < GridDimensionCols && Grid[yRow][xCol + 1] == (int)OrangeType.Rotten) {
        return true;
    }
    return false;
}


    // Subtract 1 because arrats index at 0
	public void SetGridAndDimensions(int[][] grid)
	{
        this.Grid = grid;
        
        if(grid.Length > 0)
        {
		    GridDimensionRows = grid.Length;
        }
        if(grid?[0].Length > 0)
        {
            this.GridDimensionCols = grid[0].Length;
        }

	}
    
    public void SetOrangesRotten(List<(int, int)> coordsForRottenOranges) 
    {
        foreach(var coords in coordsForRottenOranges) {
            Grid[coords.Item1][coords.Item2] = (int)OrangeType.Rotten;
        }
    }

	public int OrangesRotting(int[][] grid)
	{
		var timeElapsed = -1;

		SetGridAndDimensions(grid);

		bool hasOrangesTurnedBad;
		
		do
		{
			hasOrangesTurnedBad = false;
            List<(int,int)> orangesTurnedBadThisMinute = new List<(int,int)>();
			
			for (int yRow = 0; yRow < GridDimensionRows; yRow++)
			{
				Console.WriteLine($"yRow: {yRow}");
				for (int xCol = 0; xCol < GridDimensionCols; xCol++)
				{
					Console.WriteLine($"xCol: {xCol}");

					if (Grid[yRow][xCol] == (int)OrangeType.Fresh && IsRottenAdjacent(yRow, xCol))
					{
						Console.WriteLine("Has rotten adjacent!!");
						orangesTurnedBadThisMinute.Add((yRow, xCol));
						hasOrangesTurnedBad = true;
					}
				}
			}

			if (hasOrangesTurnedBad)
			{
				if (timeElapsed == -1)
				{
					timeElapsed = 0;
				}
				SetOrangesRotten(orangesTurnedBadThisMinute);
                orangesTurnedBadThisMinute.Clear();
				timeElapsed++;
				Console.WriteLine("timeElapsed", timeElapsed);
			}
            else {
                break;
            }
			Console.WriteLine("================================");

		} while (hasOrangesTurnedBad == true);

		return timeElapsed;
	}
}