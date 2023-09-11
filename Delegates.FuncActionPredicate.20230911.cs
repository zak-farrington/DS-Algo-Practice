/// <summary>
/// Func, Action and Predicate Delegates (function pointers) in C#.
///  Func: takes generic input and returns generic output
///  Action: Takes a generic input and always returns bool
///  Predicate: Takes generic input and always returns bool
///</summary>
void Main()
{
	var students = new List<Student>() {
		new Student { Uid = Guid.NewGuid(), Age = 35, Name = "John" },
		new Student { Uid = Guid.NewGuid(), Age = 20, Name = "Jacob" },
		new Student { Uid = Guid.NewGuid(), Age = 12, Name = "Jackson" },
	};
	
	// Func: takes generic input and returns generic output
	Func<Student, string> getStudentsName = student => student.Name;
	
	// IEnumerable.Select supports Func delegates
	var studentNames = students.Select(getStudentsName).Dump();
	
	// Action: Takes a generic input and always returns bool
	Action<Student> doStudentAction = student => Console.WriteLine($"Action trigger for {student.Name}");
	
	// ForEach method supports Action
	students.ForEach(doStudentAction);
	
	// Predicate: Takes generic input and always returns bool
	Predicate<Student> isStudentDrinkingAge = student => student.Age > 21;
	
	// FindAll supports Predicate delegate
	students.FindAll(doStudentAction).Dump();
}

public class Student
{
	public Guid Uid { get; set; }
	public int Age { get; set; }
	public string Name { get;set; }
}