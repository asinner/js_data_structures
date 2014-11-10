var colors = require('colors');
var List = require('../lib/linked_list/list.js');
var Node = require('../lib/linked_list/node.js');

function itShouldConstructANewList() {
	var msg = "it should return a new linked list";
	list = new List();
	list.constructor.name == 'List' ? report(msg, true) : report(msg, false);
};
function itShouldInsertNodeAtHead() {
	var msg = "it should insert a new node";
	list = new List();
	n1 = new Node('Andrew');
	n2 = new Node('Ben');
	list.insert(n1);
	list.head === n1 ? report(msg, true) : report(msg, false);
}
function itShouldReportTheSize() {
	var msg = "it should report the list size";
	list = new List();
	n1 = new Node('Andrew');
	n2 = new Node('Ben');
	list.insert(n1);
	list.insert(n2);
	list.size === 2 ? report(msg, true) : report(msg, false);
}
function itShouldSearchForANode() {
	var msg = "it should find a node with a given value";
	list = new List();
	n1 = new Node('Andrew');
	n2 = new Node('Ben');
	list.insert(n1);
	list.insert(n2);
	found = list.search('Andrew');
	found === n1 ? report(msg, true) : report(msg, false);
}
function itShouldRemoveANode() {
	var msg = "it should remove a node with a given value";
	list = new List();
	n1 = new Node('Andrew');
	n2 = new Node('Ben');
	list.insert(n1);
	list.insert(n2);
	removed = list.remove('Andrew');
	removed === 'Andrew' ? report(msg, true) : report(msg, false);
}
function itShouldBeDoublyLinked() {
	var msg = "it should be doubly linked";
	list = new List();
	n1 = new Node('Andrew');
	n2 = new Node('Ben');
	list.insert(n1);
	list.insert(n2);
	list.head.nextNode.previousNode === list.head ? report(msg, true) : report(msg, false);
}
function report(msg, passed) {
	if (passed) {
		console.log(msg.green);
	} else {
		console.log(msg.red);
	}
}

itShouldConstructANewList();
itShouldInsertNodeAtHead();
itShouldReportTheSize();
itShouldSearchForANode();
itShouldRemoveANode();
itShouldBeDoublyLinked();