// Written and tested with LINQPad

/// <summary>
/// Simple example insertion sort.
/// Average Time Complexity: O(n^2)
/// </summary>
private int[] GetBubbleSortedArray(int[] arrayToSort)
{
    int[] clonedArray = new int[arrayToSort.Length];
    Array.Copy(arrayToSort, clonedArray, arrayToSort.Length);

    var unsortedIndex = clonedArray.Length - 1;

    while (unsortedIndex > 0)
    {

        for (int x = 0; x < unsortedIndex; x++)
        {

            if (clonedArray[x] > clonedArray[x + 1])
            {
                var toMoveLeft = clonedArray[x + 1];
                clonedArray[x + 1] = clonedArray[x];
                clonedArray[x] = toMoveLeft;
            }
        }
        unsortedIndex--;
    }
    return clonedArray;
}

/// <summary>
/// Simple example insertion sort.
/// Average Time Complexity: O(n^2)
/// </summary>
private int[] GetInsertionSortedArray(int[] arrayToSort)
{
    int[] clonedArray = new int[arrayToSort.Length];
    Array.Copy(arrayToSort, clonedArray, arrayToSort.Length);

    for (int x = 1; x < clonedArray.Length; x++)
    {
        var currentNumberToSort = arrayToSort[x];
        var unsortedIndex = x - 1;

        while (unsortedIndex >= 0 && clonedArray[unsortedIndex] > currentNumberToSort)
        {
            // Current Unsorted Index is greater than current number.
            // Move number to the right.
            clonedArray[unsortedIndex + 1] = clonedArray[unsortedIndex];
            unsortedIndex--;
        }
        clonedArray[unsortedIndex + 1] = currentNumberToSort;
    }

    return clonedArray;
}

/// <summary>
/// Simple demo of selection sort.
/// Average Time Complexity: O(n^2)
/// </summary>
private int[] GetSelectionSortedArray(int[] arrayToSort)
{
    int[] clonedArray = new int[arrayToSort.Length];
    Array.Copy(arrayToSort, clonedArray, arrayToSort.Length);

    for (int x = 0; x < clonedArray.Length; x++)
    {
        var lowestIndexThusFar = x;

        for (int y = x + 1; y < arrayToSort.Length; y++)
        {
            if (clonedArray[y] < clonedArray[lowestIndexThusFar])
            {
                lowestIndexThusFar = y;
            }
        }

        if (lowestIndexThusFar != x)
        {
            var toCopyLeft = clonedArray[lowestIndexThusFar];
            clonedArray[lowestIndexThusFar] = clonedArray[x];
            clonedArray[x] = toCopyLeft;
        }
    }
    return clonedArray;
}

public void WriteSortResultsToConsole(string name, int[] preSortArray, int[] postSortArray)
{
    Console.WriteLine(name);
    Console.WriteLine("===================");
    Console.WriteLine($"Before: {string.Join(", ", preSortArray)}");
    Console.WriteLine($"After: {string.Join(", ", postSortArray)}");
    Console.WriteLine("===================");
}

public void Main()
{
    var preSortArray = new int[] { 9, 2, 1, 5, 6, 8, 7 };

    var bubbleSorted = GetBubbleSortedArray(preSortArray);
    WriteSortResultsToConsole("Bubble Sort Results", preSortArray, bubbleSorted);

    var insertionSorted = GetInsertionSortedArray(preSortArray);
    WriteSortResultsToConsole("Insertion Sort Results", preSortArray, insertionSorted);

    var selectionSorted = GetSelectionSortedArray(preSortArray);
    WriteSortResultsToConsole("Selection Sort Results", preSortArray, insertionSorted);
}