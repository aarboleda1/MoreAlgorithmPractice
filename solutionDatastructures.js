/*! algorithms v0.0.0 - MIT license */
'use strict';

// Create the Stack data structure
const Node = function(val) {
  this.value = val;
  this.next = null;
};

const Stack = function () {
  this.head = null;
  this.minArray = [];

  this.isEmpty = function () {
    if(!this.head) return true;
    else return false;
  };

  this.peek = function() {
    if(this.isEmpty()) return "Stack is empty!";
    return this.head.value;
  };

  this.push = function(val) {
    var newHead = new Node(val); 

    newHead.next = this.head;
    this.head = newHead;
    
    if(this.minArray.length === 0) this.minArray.push(val);
    else if(val <= this.min()) this.minArray.push(val);   
  };

  this.pop = function() {
    if(this.isEmpty()) return "Stack is empty!";

    var removedNode = this.head;
    this.head = removedNode.next;

    if(removedNode.value === this.minArray[this.minArray.length - 1]) {
      this.minArray.pop();
    }

    return removedNode.value;
  };

  this.min = function () {
    if(this.isEmpty()) return "Stack is empty!";
    return this.minArray[this.minArray.length - 1];
  };

}

/*
Stack using an object as storage
*/

/*
  const Stack = function () {
    // your code goes here
    this._storage = {};
    this._size = 0;
    this.minArray = [];

    this.peek = function() {
      if(!this._size) return "Stack is empty!";
      return this._storage[this._size];
    };

    this.push = function (val) {
      this._storage[++this._size] = val;
      if(!this._min) this._min = val;
      else if(val < this._min) this._min = val;
    };

    this.pop = function () {
      // body...
      if(this._size) {
        var popped = this._storage[this._size];
        delete this._storage[this._size];
        this._size--;
        return popped;      
      } else {
        return "Stack is empty!";
      }
    };

    this.min = function () {
      // if()
    };

    this.isEmpty = function () {
      // body...
      return Boolean(!this._size);
    };
  };
*/


/*
 Create the Queue data structure. Implement it using 2 stacks.  
 It should have the following methods:
 enqueue, dequeue, isEmpty, peek, min
*/

const Queue = function () {
  // your code goes here
  var stack1 = new Stack();
  var stack2 = new Stack();

  this.enqueue = function (val) {
    stack1.push(val);
  };

  this.dequeue = function () {
    console.log('*********', stack1.head, stack2.head)
    if(this.isEmpty()) return "Queue is empty!";
    if(stack2.size === 0) {
      while(stack1.size !== 0) stack2.push(stack1.pop());
    }

    return stack2.pop();
  };

  this.isEmpty = function () {
    return (stack1.size === 0 && stack2.size === 0);
  };

  this.peek = function () {
    if(this.isEmpty()) return "Queue is empty!";
    return stack2.peek(); 
  };

  this.min = function () {
    // body...
  };

  this.size = function () {
    return stack1.size + stack2.size;
  }

};

