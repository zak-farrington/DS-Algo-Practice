public class Solution
{
    public bool CanFinish(int numCourses, int[][] prerequisites)
    {
        var coursesAdjacencyHashMap = new Dictionary<int, List<int>>();
        foreach (var courses in prerequisites)
        {
            if (coursesAdjacencyHashMap.ContainsKey(courses[0]))
            {
                coursesAdjacencyHashMap[courses[0]].Add(courses[1]);
            }
            else
            {
                coursesAdjacencyHashMap.Add(courses[0], new List<int> { courses[1] });
            }
        }

        Stack<int> stack = new Stack<int>();
        HashSet<int> visited = new HashSet<int>();
        HashSet<int> visiting = new HashSet<int>();

        for (int i = 0; i < numCourses; i++)
        {
            if (!visited.Contains(i))
            {
                stack.Push(i);
                while (stack.Count > 0)
                {
                    int node = stack.Peek(); // peek but don't remove yet
                    visiting.Add(node);

					bool hasUnvisitedNeighbor = false;
					if (coursesAdjacencyHashMap.ContainsKey(node))
					{
						foreach (var req in coursesAdjacencyHashMap[node])
						{
							if (visiting.Contains(req))
							{
								return false; // cycle detected
							}
							if (!visited.Contains(req))
							{
								stack.Push(req);
								hasUnvisitedNeighbor = true;
								break;
							}
						}
					}

					if (!hasUnvisitedNeighbor)
					{
						stack.Pop(); // no unvisited neighbors, we're done with this node
						visiting.Remove(node);
						visited.Add(node);
					}
				}
			}
		}

		return true;
	}
}
