/*! algorithms v0.0.0 - MIT license */
'use strict';

//use if needed
const Node = function(val) {
  this.value = val;
  this.next = null;
};

/*
 Create the Stack data structure. Stack should have the following methods:
 pop, push, isEmpty, peek, min
*/

const Stack = function () {
  // your code goes here
  // your code goes here
  this.storage = [];
  this.top = -1;
  this.pop = function() {
      if (this.top < 0) {
          return 'Stack is empty!';
      } else {

          let returnVal = this.storage[this.top];
          this.storage.pop();
          this.top--;
          return returnVal
      }
  };
  this.push = function(val) {
      this.storage.push(val);
      this.top++
  };
  this.isEmpty = function() {
      return this.top < 0 ? true : false;
  };
  this.peek = function() {
      return this.top < 0 ? 'Stack is empty!' : this.storage[this.top];
  };
  this.min = function() {
      return this.top < 0 ? 'Stack is empty!' : Math.min.apply(null, this.storage);
  };

};

/*
 Create the Queue data structure. Implement it using 2 stacks.  
 It should have the following methods:
 enqueue, dequeue, isEmpty, peek, min
*/

const Queue = function () {
  // your code goes here
};
