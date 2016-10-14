/* global algorithms, describe, it, expect, should */

describe('Stack', function () {
  'use strict';

  let myStack;

  before(function() {
    // runs before all tests in this block
    myStack = new Stack();    
  });

  it('exists', function () {
    expect(Stack).to.be.a('function');
  });

  xit('should have an _storage, _size, minArray property', function() {
    expect(myStack).to.have.property('_storage');
    expect(myStack).to.have.property('_size');
    expect(myStack).to.have.property('minArray');
  });

  it('should have methods named "pop", "push", "isEmpty", "peek", "size" and "min"', function () {
    expect(myStack.push).to.be.a('function');
    expect(myStack.pop).to.be.a('function');
    expect(myStack.peek).to.be.a('function');
    expect(myStack.min).to.be.a('function');
    expect(myStack.isEmpty).to.be.a('function');
  });

  it('should return "true" if isEmpty is called on an empty list', function () {
    expect(myStack.isEmpty()).to.be.true;
  });


  it('should return "Stack is empty" if peek is called on empty list', function () {
    expect(myStack.peek()).to.equal("Stack is empty!");
  });

  it('should push items on to the Stack', function () {
    myStack.push(1);
    expect(myStack.peek()).to.equal(1);
    myStack.push(2);
    expect(myStack.peek()).to.equal(2);
  });

  it('should pop the last item added', function () {
    //last item added was 2
    myStack.push(3);
    expect(myStack.pop()).to.equal(3);
    expect(myStack.peek()).to.equal(2);
    expect(myStack.pop()).to.equal(2);
    expect(myStack.peek()).to.equal(1);
  });

  it('should return "Stack is empty!" if popping an empty list', function () {
    expect(myStack.pop()).to.equal(1);
    expect(myStack.isEmpty()).to.be.true;
    expect(myStack.pop()).to.equal("Stack is empty!");
  });

  it('should return the minimum when min is called', function () {
    myStack.push(3);
    myStack.push(5);
    expect(myStack.min()).to.equal(3);
    expect(myStack.peek()).to.equal(5);
    myStack.push(2);
    expect(myStack.min()).to.equal(2);
    myStack.push(8);
    expect(myStack.peek()).to.equal(8);
    expect(myStack.min()).to.equal(2);
    myStack.push(2);
    myStack.push(1);
    expect(myStack.min()).to.equal(1);
    myStack.pop(); //pops 1
    expect(myStack.min()).to.equal(2);
    myStack.pop(); //pops 2
    expect(myStack.min()).to.equal(2);
    myStack.pop(); //pops 8
    expect(myStack.min()).to.equal(2);
    myStack.pop(); //pops 2
    expect(myStack.min()).to.equal(3);
    myStack.pop(); //pops 5
    expect(myStack.min()).to.equal(3);            
    myStack.pop(); //pops 3
    expect(myStack.isEmpty()).to.be.true;    
    expect(myStack.min()).to.equal("Stack is empty!");
  });

}); //Stack


describe('Queue', function () {
  'use strict';

  let myQueue;

  before(function() {
    // runs before all tests in this block
    myQueue = new Queue();    
  });

  it('exists', function () {
    expect(Queue).to.be.a('function');
  });

  xit('should have an _storage, _size, minArray property', function() {
    expect(myQueue).to.have.property('_storage');
    expect(myQueue).to.have.property('_size');
    expect(myQueue).to.have.property('minArray');
  });

  it('should have methods named "enqueue", "dequeue", "isEmpty", "peek", "size" and "min"', function () {
    expect(myQueue.enqueue).to.be.a('function');
    expect(myQueue.dequeue).to.be.a('function');
    expect(myQueue.peek).to.be.a('function');
    expect(myQueue.min).to.be.a('function');
    expect(myQueue.isEmpty).to.be.a('function');
  });

  it('should return "true" if isEmpty is called on an empty list', function () {
    expect(myQueue.isEmpty()).to.be.true;
  });


  it('should return "Queue is empty" if peek is called on empty list', function () {
    expect(myQueue.peek()).to.equal("Queue is empty!");
  });

  it('should enqueue items on to the Queue', function () {
    myQueue.enqueue(1);
    expect(myQueue.size()).to.equal(1);
    myQueue.enqueue(2);
    expect(myQueue.size()).to.equal(2);
  });

  it('should dequeue the last item added', function () {
    //last item added was 2
    console.log(myQueue)
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    expect(myQueue.dequeue()).to.equal(1);
    expect(myQueue.size()).to.equal(3);
    expect(myQueue.dequeue()).to.equal(2);
    expect(myQueue.size()).to.equal(2);
  });

  it('should return "Queue is empty!" if popping an empty list', function () {
    expect(myQueue.dequeue()).to.equal(3);
    expect(myQueue.dequeue()).to.equal(4);
    expect(myQueue.isEmpty()).to.be.true;
    expect(myQueue.dequeue()).to.equal("Queue is empty!");
  });

  xit('should return the minimum when min is called', function () {
    myQueue.enqueue(3);
    myQueue.enqueue(5);
    expect(myQueue.min()).to.equal(3);
    expect(myQueue.peek()).to.equal(5);
    myQueue.enqueue(2);
    expect(myQueue.min()).to.equal(2);
    myQueue.enqueue(8);
    expect(myQueue.peek()).to.equal(8);
    expect(myQueue.min()).to.equal(2);
    myQueue.enqueue(2);
    myQueue.enqueue(1);
    expect(myQueue.min()).to.equal(1);
    myQueue.dequeue(); //pops 1
    expect(myQueue.min()).to.equal(2);
    myQueue.dequeue(); //pops 2
    expect(myQueue.min()).to.equal(2);
    myQueue.dequeue(); //pops 8
    expect(myQueue.min()).to.equal(2);
    myQueue.dequeue(); //pops 2
    expect(myQueue.min()).to.equal(3);
    myQueue.dequeue(); //pops 5
    expect(myQueue.min()).to.equal(3);            
    myQueue.dequeue(); //pops 3
    expect(myQueue.isEmpty()).to.be.true;    
    expect(myQueue.min()).to.equal("Queue is empty!");
  });

}); //Queue
