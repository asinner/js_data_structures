function BinarySearchTree() {
	this.size = 0;
	this.root = null;
}
BinarySearchTree.prototype.insert = function(node, current) {

	var current = current || this.root;
	
	if (!this.root) {
		this.root = node;
		this.size += 1;
	} else {
		if (node.value > current.value) {
			if (current.right) {
				this.insert(node, current.right);
			} else {
				current.right = node;
				this.size += 1;
				this.balance += 1;
			}
		} else if (node.value < current.value) {
			if (current.left) {
				this.insert(node, current.left);
			} else {
				current.left = node;
				this.size += 1;
				this.balance -= 1;
			}
		}
	}
}
BinarySearchTree.prototype.contains = function(val) {
	var match = false;
	this.traverse('pre_order', function(current) {
		if (current.value == val) {
			match = true;
		}
	});
	return match;
}
BinarySearchTree.prototype.traverse = function(method, visit) {
	this[method](this.root, visit);
}
BinarySearchTree.prototype.pre_order = function(current, visit) {
	if (!current) {
		return false;
	} else {
		visit(current);
		this.pre_order(current.left, visit);
		this.pre_order(current.right, visit);		
	}
}
BinarySearchTree.prototype.in_order = function(current, visit) {
	if (!current) {
		return false;
	} else {
		this.in_order(current.left, visit);
		visit(current);
		this.in_order(current.right, visit);
	}
}
BinarySearchTree.prototype.post_order = function(current, visit) {
	if (!current) {
		return false;
	} else {
		this.post_order(current.left, visit);
		this.post_order(current.right, visit);
		visit(current);
	}
}
BinarySearchTree.prototype.breadth_first = function(visit) {
	q = new Queue();
	q.enqueue(this.root);
	while (q.size()) {
		var current = q.dequeue();
		visit(current);
		if (current.left) {
			q.enqueue(current.left);
		}
		if (current.right) {
			q.enqueue(current.right);
		}
	}
}
BinarySearchTree.prototype.size = function() {
	return this.size;
}
BinarySearchTree.prototype.depth = function(current) {
	if (!current) {
		return 0;
	} else {
		return Math.max(this.depth(current.left), this.depth(current.right)) + 1;
	}
}
BinarySearchTree.prototype.balanceOut = function(current) {
	var balance = 0;
	if (current.left) {
		balance += (1 + Math.abs(this.balanceOut(current.left)));
	}
	if (current.right) {
		balance -= (1 + Math.abs(this.balanceOut(current.right)));
	}
	return balance;
}

module.exports = BinarySearchTree;
