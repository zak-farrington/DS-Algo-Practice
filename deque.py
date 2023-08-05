from collections import deque

queue = deque();


queue.append("Alice");
queue.append("Bob");
queue.append("Charlie");

queue.popleft(); # same as .Dequeue (C#) and .shift (JavaScript)
print(queue);
