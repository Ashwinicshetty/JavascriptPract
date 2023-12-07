//write the length of an array :
//1)if el is more/equal to 111 & el is not divisible by 11 consider it as 0
//2)if el is divisible by 11 and less then 111 take the count and return the length
let ar = [0, 1, 22, 3, 4, 55, 11, 122];
let res = ar.map((el, i) => {
  if (el % 11 == 0) {
    let count = +i;
    return count;
  } else if (el >= 111 || el % 11 != 0) {
    return (count = 0);
  }
});
let a = res.filter(function (val) {
  return val !== 0;
});
console.log(a.length);

//Print from 1 to 100 : for every multiple of 3 print Tik & for every multiple of 5 print Tok
//for every multiple of 3 and 5 print TikTok
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("TikTok");
  } else if (i % 3 == 0) {
    console.log("Tik");
  } else if (i % 5 == 0) {
    console.log("Tok");
  } else console.log(i);
}

let twoSum = (arr, sum) => {
  let result = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      result.push([obj[arr[i]], arr[i]]);

      //if index is required:
      //result.push([arr.indexOf(obj[arr[i]]), arr.indexOf(arr[i])]);
      //return result;
    } else {
      obj[sum - arr[i]] = arr[i];
    }
  }
  return result;
};

console.log(twoSum([2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7));

//remove the duplicate el from an ar using for loop

let dup = [1, 3, 4, 2, 3, 2];

for (let i = 0; i < dup.length; i++) {
  for (let j = i + 1; j < dup.length; j++) {
    if (dup[i] == dup[j]) {
      dup.splice(i, 1);
    }
  }
}
console.log(dup);

// if arr = [1, 2, ,3] output = [1, 2, 4] , if arr = [9] output [1, 0], and if arr=[3,4,9] output should be =[3,5,0]
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }

  return [1, ...digits];
  //return (BigInt(digits. join("")) + BigInt(1)).toString().split("");
};
let digits = [4, 6, 7, 8];
console.log(plusOne(digits));

//reverse the num without using string methods
let number = 123;
console.log(Math.floor(number / 10));
let result = 0;

while (number > 0) {
  result = result * 10 + (number % 10);
  number = Math.floor(number / 10);
}

console.log(result);
