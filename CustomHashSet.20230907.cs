public class MyHashMap {
    private List<(int, int)>[] Map { get;set; }
    private const int size = 1000;
    public MyHashMap()
    {
        Map = new List<(int, int)>[size];
    }

    private int Hash(int key)
    {
        return key % size;
    }
    
    public void Put(int key, int value)
    {
        var index = Hash(key);
        if(Map[index] == null)
        {
            Map[index] = new List<(int, int)>();
        }
        
		var existingTuppleIndex = Map[index].FindIndex(m => m.Item1 == key);
		
		if(existingTuppleIndex > -1)
        {
			Map[index][existingTuppleIndex] = (key, value);
		}
        else {
			Map[index].Add((key, value));
        }
		
    }

	public int Get(int key)
	{
        var index = Hash(key);
        if (Map[index] == null)
        {
            return -1;
        }

		var existingTuppleIndex = Map[index].FindIndex(m => m.Item1 == key);

		if (existingTuppleIndex > -1)
		{
			return Map[index][existingTuppleIndex].Item2;
		}
        else
        {
		    return -1;
        }
	}
    
    public void Remove(int key) 
	{
        var index = Hash(key);
        if(Map[index] == null)
        {
            return;
        }

    	var existingTuppleIndex = Map[index].FindIndex(m => m.Item1 == key);

		if (existingTuppleIndex > -1)
		{
			Map[index].RemoveAt(existingTuppleIndex);
		}
    }	
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.Put(key,value);
 * int param_2 = obj.Get(key);
 * obj.Remove(key);
 */