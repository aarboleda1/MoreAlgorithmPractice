/*! algorithms v0.0.0 - MIT license */
'use strict';

// Reverse the provided string.
const reverseString = function (str) {
  // your code goes here
  //basecase
  return str.split('').reverse().join('')
};

// Reverse only the vowels in the provided string.
const reverseVowels = function (str) {
  
  let storage = {};
  let returnArray = new Array(str.length);
  let arr = str.split('');
  let reversedVowel = [];
  //populate object
  arr.forEach(function(letter, index) {
    if(letter !== 'a' && 
    letter !== 'e' &&
    letter !== 'i' &&
    letter !== 'o' &&
    letter !== 'u'
    ){
      storage[index]  = letter;
    } else {
      reversedVowel.push(letter);
    }
    
    //reversedVowel = reversedVowel.reverse('');
  
  //loop thru object
  for(let key in storage){
    //place empty array with non vowels;
    returnArray[key] = storage[key]
  }
  })
reversedVowel = reversedVowel.reverse('');
  //place vowels in returnArray
  for(let i = 0; i < returnArray.length; i++){
    let letter = returnArray[i] 
    if(!letter){
  
      returnArray[i] = reversedVowel[0]
      reversedVowel.splice(0,1)
    }
  }
  return returnArray.join('').toString('')
};

// Factorialize a Number
const factorialize = function (num) {
  if(num <= 0){
    return 1;
  }

  return num * factorialize(num-1);
};

/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -. Example: Given a = 1 and b = 2, return 3.
*/
const getSum = function (a, b) {    
  // your code goes here

};

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given arr = [2, 7, 11, 15], target = 9,
Because arr[0] + arr[1] = 2 + 7 = 9, return [0, 1].
*/
const twoSum = function (arr, tgt) {
  let storage = {};
  let result = [];
  for(let i = 0; i <= arr.length -1; i++){
    let currentNum = arr[i];
    let neededValue = tgt - currentNum;
    if(neededValue in storage){
    
      return [storage[neededValue], i];
    } else {
    
      
      storage[currentNum] = i;
    }
  }
  return result
};

/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/
const singleNumber = function (arr) {
  // your code goes here
};

//it should take a string and repeat it a number of times
const repeat = function (str, count) {
  // your code goes here
};

/*
 ***THIS MIGHT BE AN OUT OF SCOPE PROBLEM IF YOU ARE A FULCRUM STUDENT***
 Create data structuce called Union-Find. 
 Given a set of 'n' objects.  The interface is as follows
・Union command: connect two objects.
・Connected query: is there a path connecting the two objects?
 See test cases to develop the data structure
*/

const UF = function (n) {
  // your code goes here
};

/*
  Test if a string has all unique characters
  Return a boolean value 
*/

const isUnique = function (s) {
  // your code goes here
};

/*
  Test if a string is a palindrome
  Return a boolean value 
*/

const isPalindrome = function (s) {
  // your code goes here
};

/*
  Test if string 2 is a permutation of string 1
  Return a boolean value 
*/

const isPermutation = function (s1, s2) {
  // your code goes here
};

/*
  Test if a string has a permutation which is a palindrome
  Return a boolean value 
*/

const hasPalindromePermutation = function (str) {
  // your code goes here
};

/*
  Given an array with sub-arrays, all of which hold numbers, return the sum
  of all the numbers in the array  
*/

const arraySum = function (arr) {
  // your code goes here
};
