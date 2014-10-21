function List() {
	this.head = null;
	this.size = 0;
}
List.prototype.insert = function(node) {
    var current = this.head;
    if (current != null) {
        current.previousNode = node;        
    };
    this.head = node;
	this.head.nextNode = current;
	this.size += 1;
};
List.prototype.size = function() {
	return this.size;
};
List.prototype.search = function(value) {
	if (this.head == null) {
		return  null;
	};
	
	var node = this.head;
	
	while (node != null) {
		if (node.data == value) {
			return node;
		}
		node = node.nextNode;
	}
	return null;
};
List.prototype.remove = function(value) {
	if (this.head == null) {
		return null;
	};
	
	var node = this.head;
	
	if (node.data == value) {
		this.head = node.nextNode;
		return node.data;
	};
	
	while (node.nextNode != null) {
		comparison = node.nextNode;
		if (comparison.data == value) {
			node.nextNode = comparison.nextNode;
			if (node.nextNode != null) {
				node.nextNode.previousNode = node				
			}
			return comparison.data;
		}
		node = node.nextNode;
	};
	
	return null;
};
List.prototype.toString = function() {
	if (this.head == null) {
		console.log(null);
	} else {
		var node = this.head;
		while (node != null) {
			console.log(node.data);
			node = node.nextNode;
		}
	}
}

module.exports = List;