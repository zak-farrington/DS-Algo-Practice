using System;
using System.Text;

public class Program
{
    public static void Main()
    {
        var strings = new string[] { "flower", "flour", "flourish" };
        var longestPrefix = GetLongestPrefix(strings);
        Console.WriteLine(longestPrefix);
    }

    private static string GetLongestPrefix(string[] array)
    {
        if (array == null || array.Length == 0)
        {
            return null;
        }

        var prefixBase = array[0];
        var sb = new StringBuilder();

        for (var chrIndex = 0; chrIndex < prefixBase.Length; chrIndex++)
        {
            var currentChar = prefixBase[chrIndex];

            for (var x = 1; x < array.Length; x++)
            {
                if (chrIndex >= array[x].Length || array[x][chrIndex] != currentChar)
                {
                    return sb.ToString();
                }
            }

            sb.Append(currentChar);
        }

        return sb.ToString();
    }
}
