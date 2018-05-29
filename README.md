![cf](http://i.imgur.com/7v5ASc8.png) Stacks and Queues Data Structures
====


### Node.js
* The Node class is main method is to create a new Node object, with Next and Value parameters.

### Stack.js
* The Stack uses the Node class for all it's methods.
* The main methods for this class are: push(value), pop(), serialize(), deserialize(jsonObj)
* The push method adds a new node to the tail of the Linked List, whereas Pop removed the last node from the tail.
* Serialize converts that object to JSON, and Deserialize reverts back to the Linked List

### Queue.js
* The Queue uses the Node class for all it's methods.
* The main methods for this class are: enqueue(value), dequeue(), serialize(), deserialize(jsonObj)
* The enqueu method adds a new node to the Tail of the Linked List, whereas Dequeue removes the Head node from the start of the Linked List.
* Serialize converts that object to JSON, and Deserialize reverts back to the Linked List

### Testting
* Install jest via npm, using npm i jest
* The test files are located in the __Test__/lib/ directory
* Each method has at elas 1-3 unit tests to make sure all happy-path cases are covered
