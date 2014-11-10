var colors = require('colors');
var BinarySearchTree = require('../lib/binary_search_tree/binary_search_tree.js');
var Node = require('../lib/binary_search_tree/node.js');
var Queue = require('../lib/binary_search_tree/queue.js');

function itShouldCreateANode() {
	var msg = "It should create a node";
	var node = new Node(3);
	node.value == 3 ? report(msg, true) : report(msg, false);
}
function itShouldInsertAValue() {
	var msg = "It should insert a value";
	var bst = new BinarySearchTree();
	var node = new Node(1);
	bst.insert(node);
	bst.root.value == 1 ? report(msg, true) : report(msg, false);
}
function itShouldReportContainingAValue() {
	var msg = "It should report true containing a value";
	var bst = new BinarySearchTree();
	var node = new Node(5);
	bst.insert(node);
	bst.contains(5) ? report(msg, true) : report(msg, false);
}
function itShouldReportFalseForNotContainingAValue() {
	var msg = "It should report false for not containing a value";
	var bst = new BinarySearchTree();
	var node = new Node(5);
	bst.insert(node);
	!bst.contains(13) ? report(msg, true) : report(msg, false);
}
function itShouldReportTheSizeOfTheTree() {
	var msg = "It should report the size of the tree";
	var bst = new BinarySearchTree();
	var n1 = new Node(5);
	var n2 = new Node(13);
	var n3 = new Node(4);
	bst.insert(n1);
	bst.insert(n2);	
	bst.insert(n3);
	bst.size == 3 ? report(msg, true) : report(msg, false);
}
function itShouldReportTheDepthOfTheTree() {
	var msg = "It should report the depth of the tree";
	var bst = new BinarySearchTree();
	var n1 = new Node(6);
	var n2 = new Node(5);
	var n3 = new Node(7);
	var n4 = new Node(8);
	bst.insert(n1);
	bst.insert(n2);
	bst.insert(n3);
	bst.depth() == 3 ? report(msg, true) : report(msg, false);
}
function itShouldReportTheBalanceOfTheTree() {
	var msg = "It should report the balance of the tree";
	var bst = new BinarySearchTree();
	var n1 = new Node(6);
	var n2 = new Node(5);
	var n3 = new Node(7);
	var n4 = new Node(8);
	bst.insert(n1);
	bst.insert(n2);
	bst.insert(n3);
	bst.insert(n4);
	bst.balanceOut(bst.root) == -1 ? report(msg, true) : report(msg, false);
}
function report(msg, passed) {
	if (passed) {
		console.log(msg.green);
	} else {
		console.log(msg.red);
	}
}

itShouldCreateANode();
itShouldInsertAValue();
itShouldReportContainingAValue();
itShouldReportFalseForNotContainingAValue();
itShouldReportTheSizeOfTheTree();
itShouldReportTheBalanceOfTheTree();