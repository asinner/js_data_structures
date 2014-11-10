# README
This library contains a number of classic data structures implemented in JavaScript.

### Binary Search Tree
The Binary Search Tree library is composed of three classes:

- Binary Search Tree
- Node
- Queue

BinarySearchTree API usage:

- **new()**
	Creates a new `BinarySearchTree` object

- **insert(node, current)**
	Inserts a new `Node` into the `BinarySearchTree` object. Uses recursion to insert the passed node.
		**node** (required): must be an object returned from `new Node()`
		**current** (required): the current node object to insert the `node` argument after. Defaults to the BinarySearchTree root node.

- **contains(value)**
	Returns true if the value is found within the BinarySearchTree. 
		**value** (required): This method checks the value assigned to each node.
	
- **traverse(method, visit)**
	Traverses the tree using the **method** specified and calls the **visit** function for each pass in the traversal.
		**method** (required): The traversal method to use. Methods can 
		**visit** (required): The visit function to call on each pass for the traversal method.
		
- **size()**
	Returns the number of nodes in the BinarySearchTree

- **depth(current)**
	Returns the number of levels below the current BinarySearchTree node.
	**current**: the current node to check the levels below. Pass in the root to start from the top.

- **balance(current)**
	Returns the number of levels below the current BinarySearchTree node.
	**current**: the current node to check the levels below. Pass in the root to start from the top.
		

### Doubly Linked List
Example usage:

### Requiring the files
You'll need these two constructors to implement the linked list.
```javascript
var List = require('../lib/linked_list/list.js'); // Require the list class
var Node = require('../lib/linked_list/node.js'); // Require the node class
```

### Create a list
```javascript
// ..require the files
var list = new List();
```

### Create a node
```javascript
// ..require the files
node = new Node('Andrew');
```

### Insert a node into the list
```javascript
// ..require the files
var list = new List();
node = new Node('Andrew');
list.insert(node); // Inserts node into the head of the list
```

### Search for a node by a given value
```javascript
// ..require the files
var list = new List();
node = new Node('Andrew');
list.insert(node);
foundNode = list.search('Andrew'); // Returns the first node if found, otherwise null
```

### Remove a node by a given value
```javascript
// ..require the files
var list = new List();
node = new Node('Andrew');
list.insert(node);
list.remove('Andrew'); // Returns the value if a node was removed, otherwise null
```

### Get the size of the list
```javascript
// ..require the files
var list = new List();
node = new Node('Andrew');
list.insert(node);
list.size; // Returns the size the array
```
### Run the tests
Ensure node is installed. CD into the js_data_structures directory then:
```
$ node test/linked_list_test.js
```
See all tests pass.

