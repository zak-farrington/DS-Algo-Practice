class Node { 
    constructor(data, next)
    {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);

        this.head = newNode;
        this.tail = this.tail ? this.tail : newNode;
        return this;
    }

    append(value) {
        const newNode = new Node(value, this.tail);
        if(this.head == null)
        { 
            this.head = newNode
            this.tail = newNode;
            return;
        }
        // Make the last item refer to the newly added node
        this.tail.next = newNode;
        // Make the newly added node the last/tail node
        this.tail = newNode;
    }

    traverse() {
        let currentNode = this.head;

        while (currentNode) {
           console.log("currentNode", currentNode);
           currentNode = currentNode.next;
        }
    }

    find(value) {
        let currentNode = this.head;

        while (currentNode) {
            if(currentNode.data === value) 
            {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();

list.append("I am first!");
list.append("I am second!");
list.append("I am third!");

console.log("list", list);