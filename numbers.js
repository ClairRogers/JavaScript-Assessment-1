//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
function sum(...arg) {
  let total = []
  let out = 0
  for (let i = 0; i < arg.length; i++) {
    total.push(parseInt(arg[i], 10))
  }
  for (let i = 0; i < total.length; i++) {
    out += total[i]
  }
  return out
}




//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function byThree() {
  let nums = []
  for (let i = 20; i <= 100; i++) {
    if (i % 3 == 0) {
      nums.push(i)
    }
  }
  return nums
}




//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
function average(arr) {
  let out = 0
  for (let i = 0; i < arr.length; i++) {
    out += arr[i]
  }
  out = (out / (arr.length))
  return out
}
average(scores)