# README
This library contains a number of classic data structures implemented in JavaScript.

## Doubly Linked List
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

