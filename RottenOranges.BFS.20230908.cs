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

	public bool IsFresh(int yRow, int xCol)
	{
		return Grid[yRow][xCol] == (int)OrangeType.Fresh;
	}

	public bool IsRotten(int yRow, int xCol)
	{
		return Grid[yRow][xCol] == (int)OrangeType.Rotten;
	}

	// Subtract 1 because arrats index at 0
	public void SetGridAndDimensions(int[][] grid)
	{
		this.Grid = grid;

		if (grid.Length > 0)
		{
			GridDimensionRows = grid.Length;
		}
		if (grid?[0].Length > 0)
		{
			this.GridDimensionCols = grid[0].Length;
		}

	}

	public void SetOrangesRotten(List<(int, int)> coordsForRottenOranges)
	{
		foreach (var coords in coordsForRottenOranges)
		{
			Grid[coords.Item1][coords.Item2] = (int)OrangeType.Rotten;
		}
	}

	public int OrangesRotting(int[][] grid)
	{
		var timeElapsed = 0;

		SetGridAndDimensions(grid);

		var freshOranges = 0;
		Queue<(int, int)> rottenOranges = new Queue<(int, int)>();

		for (int yRow = 0; yRow < GridDimensionRows; yRow++)
		{
			for (int xCol = 0; xCol < GridDimensionCols; xCol++)
			{
				if (IsRotten(yRow, xCol))
				{
					rottenOranges.Enqueue((yRow, xCol));
				}
				else if(IsFresh(yRow, xCol)){
					freshOranges++;
				}
			}
		}
		
		// Each iterration of while loop is 1 minute passed.
		var rottenOrangesCount = rottenOranges.Count;
        while(rottenOrangesCount > 0)
		{
            bool hasOrangesTurnedRotten = false;

            rottenOrangesCount = rottenOranges.Count;
            for (int i = 0; i < rottenOrangesCount; i++)
			{
				var dequeuedOrange = rottenOranges.Dequeue();

				foreach (var (yOffset, xOffset) in new[] { (0, 1), (0, -1), (1, 0), (-1, 0) })
				{
					var yPosToCheck = dequeuedOrange.Item1 + yOffset;
					var xPosToCheck = dequeuedOrange.Item2 + xOffset;

					var isPosValid = yPosToCheck >= 0 && yPosToCheck < GridDimensionRows && xPosToCheck >= 0 && xPosToCheck < GridDimensionCols;

					if (isPosValid && IsFresh(yPosToCheck, xPosToCheck))
					{
						// Adjacent Orange is fresh.  Make it rotten.
						Grid[yPosToCheck][xPosToCheck] = (int)OrangeType.Rotten;
						rottenOranges.Enqueue((yPosToCheck, xPosToCheck));
						freshOranges--;
                        hasOrangesTurnedRotten = true;
					}
				}
			}

            if(hasOrangesTurnedRotten)
            {
                timeElapsed++;
            }
		}

		return freshOranges > 0 ? -1 : timeElapsed;
	}
}