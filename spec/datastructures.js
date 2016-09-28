/* global algorithms, describe, it, expect, should */

describe('Stack', function () {
  'use strict';

  let myStack;
  // let num;

  before(function() {
    // runs before all tests in this block
    // num = 10;
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
