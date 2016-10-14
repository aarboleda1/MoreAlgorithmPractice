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
  
  this.minArray = [];
  this.size = -1;
  this.pop = function() {
      if (this.size < 0) {
          return 'Stack is empty!';
      } else {

          let returnVal = this.minArray[this.size];
          this.minArray.pop();
          this.size--;
          return returnVal
      }
  };
  this.push = function(val) {
      this.minArray.push(val);
      this.size++
  };
  this.isEmpty = function() {
      return this.size < 0 ? true : false;
  };
  this.peek = function() {
      return this.size < 0 ? 'Stack is empty!' : this.minArray[this.size];
  };
  this.min = function() {
      return this.size < 0 ? 'Stack is empty!' : Math.min.apply(null, this.minArray);
  };



};

/*
 Create the Queue data structure. Implement it using 2 stacks.  
 It should have the following methods:
 enqueue, dequeue, isEmpty, peek, min
*/

const Queue = function () {
  this.data = [];
    this.size =  function () {
      return this.data.length;
    };
    console.log(this.size)
    
    /*Enqueue adds to the end of the queue*/
    this.enqueue = function(val) {
  
      this.data.push(val)
          this.size++
    };
    /*dequeue removes from front of list*/
    this.dequeue = function () {
    
    let returnNode = this.data[0]
    this.data.shift();
    
    return returnNode;
    }
    /*checks if empty returns boolean value*/
    this.isEmpty = function () {
      return this.data.length === 0 ? true : false;
    }
    /*Returns the node at the front of the queue without removing*/
    this.peek = function () {
      if(this.isEmpty()){return 'Queue is empty!'}
      let topNode = this.data[0];
    
      return topNode;
    }
    
    this.min = function () {
    if(this.isEmpty()) return 'Stack is empty!'
    return Math.min.apply(null, this.data )
    }
};
