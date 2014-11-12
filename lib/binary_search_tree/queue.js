function Queue() {
	this.nodes = [];
}
Queue.prototype.enqueue = function(node) {
	this.nodes.push(node);
}
Queue.prototype.dequeue = function() {
	return this.nodes.shift();
}
Queue.prototype.size = function() {
	return this.nodes.length;
}

module.exports = Queue;
