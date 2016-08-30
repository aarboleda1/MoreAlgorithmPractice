/* global algorithms, describe, it, expect, should */

describe('reverseString', function () {
  'use strict';

  it('exists', function () {
    expect(reverseString).to.be.a('function');
  });

  it('should reverse a string', () => {
    expect(reverseString("hello")).to.equal("olleh");
    expect(reverseString("Greetings from Earth")).to.equal("htraE morf sgniteerG");
  });
}); //reverseString

describe('reverseVowels', function () {
  'use strict';

  it('exists', function () {
    expect(reverseVowels).to.be.a('function');
  });

  it('should reverse only the vowels in a given string', () => {
    expect(reverseVowels("hello")).to.equal("holle");
    expect(reverseString("leetcode")).to.equal("leotcede");  
  });
}); //reverseVowels

describe('factorialize', function () {
  'use strict';

  it('exists', function () {
    expect(factorialize).to.be.a('function');
  });

  it('should calculate the factorial', () => {
    expect(factorialize(5)).to.equal(120);
    expect(factorialize(10)).to.equal(3628800);
    expect(factorialize(20)).to.equal(2432902008176640000);
    expect(factorialize(0)).to.equal(1);
  });
}); //factorialize

describe('getSum', function () {
  'use strict';

  it('exists', function () {
    expect(getSum).to.be.a('function');
  });

  it('should calculate the sum without using + or -', () => {
    expect(getSum(1,2)).to.equal(3);
    expect(getSum(-4,5)).to.equal(1);
    expect(getSum(4,6)).to.equal(10);  
    expect(getSum(-4,-4)).to.equal(-8);
  });
}); //getSum

describe('twoSum', function () {
  'use strict';

  it('exits', function () {
     expect(twoSum).to.be.a('function'); 
  });

  it('should find the indices of the 2 values that sum to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0,1]);
    expect(twoSum([3,2,4], 6)).to.deep.equal([1,2]);
    expect(twoSum([0,4,3,0], 0)).to.deep.equal([0,3]);
  });  
}); //twoSum

describe('singleNumber', function () {
  'use strict';

  it('exists', function () {
    expect(singleNumber).to.be.a('function');
  });

  it('should find that digit that occurs once', () => {
    expect(singleNumber([1])).to.equal(1);
    expect(singleNumber([1,2,3,4,5,1,2,6,3,4,5,7,7])).to.equal(6);
  });
}); //singleNumber

describe('repeat', function () {
  'use strict';

  it('exists', function () {
    expect(repeat).to.be.a('function');
  });

  it('should repeat str count number of times', () => {
    expect(repeat('*', 3)).to.equal('***');
    expect(repeat("abc", 3)).to.equal("abcabcabc");
    expect(repeat("abc", 4)).to.equal("abcabcabcabc");
    expect(repeat("abc", 1)).to.equal("abc");
  });
}); //repeat
