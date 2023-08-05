<Query Kind="Program">
  <Namespace>LINQPad.FSharpExtensions</Namespace>
</Query>

class Program {

	
	public static void Main()
	{
		char[] array = { 'a', 'b', 'c', 'd', 'e', 'f'};
		array.Dump();
		Rotate(array, 5).Dump();
	}

	static char[] Rotate(char[] arrayToRotate, int numRotations)
	{

		var arrayLength = arrayToRotate.Length;
		var rotatedArray = new char[arrayLength];

		for (int x = 0; x < numRotations; x++)
		{
			
			var charToMoveIndex = arrayLength - 1 - x;

			Array.Copy(arrayToRotate, charToMoveIndex, rotatedArray, x, 1);
		}

		Array.Copy(arrayToRotate, 0, rotatedArray, numRotations, arrayToRotate.Length - numRotations);


		return rotatedArray;
	}
}