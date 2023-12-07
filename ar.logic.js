let ar = [1, 2, 4, 5, 6, 8, 3, 7];
//find second max and second min
function secondMax(a) {
  const firstMax = Math.max(...a);
  a.splice(a.indexOf(firstMax), 1);
  return Math.max(...a);
}
function secondMin(a) {
  const firstMin = Math.min(...a);
  a.splice(a.indexOf(firstMin), 1);
  return Math.min(...a);
}
console.log(secondMax(ar), secondMin(ar));

//print the maximum number in an array without using spread operator
var arrMax = [6, 89, 3, 45];
console.log(Math.max.apply(null, arrMax))

//print only unique number
let arr = [1, 3, 4, 5, 2, 4, 3, 6, 7, 8, 7];
let unique = arr.filter((el) => arr.indexOf(el) == arr.lastIndexOf(el));
console.log(unique);

//remove duplicate
let removeDuplicate = arr.filter((el, i) => arr.indexOf(el) == i);
console.log(removeDuplicate);

//print only unique obj from an array
let arr1 = [
  { roleId: 2, userName: "ashwini", role: "tester" },
  { roleId: 3, userName: "abhi", role: "admin" },
  { roleId: 2, userName: "ashwini", role: "tester" },
];
let uni = arr1.filter((el, i, ar) => {
  let a = ar.findIndex((el2) => {
    return JSON.stringify(el2) === JSON.stringify(el);
  });
  return a === i;
});
console.log(uni);

//print the obj from an ar by adding bonous whose sal is more then 300
let emp = [
  { name: "ashwini", salary: 200 },
  { name: "abhi", salary: 500 },
  { name: "sanvi", salary: 350 },
];
let res = emp.map((el) => {
  if (el.salary > 300) {
    el.salary = el.salary + 50;
    return el;
  } else {
    return el;
  }
});
console.log(res);

//print emp name whose salary is more then 300
emp.forEach((el) => {
  if (el.salary > 300) {
    console.log(el.name);
  }
});

//nested array to single array
let ar2 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const ar1 = ar2.flat(2);
console.log(ar1);

//
let str1 = ["ashwini", "akshay", "sanvith"];
let str2 = [
  "nithin",
  "ashwini",
  "abhi",
  "sanvith",
  "sanvi",
  "shreya",
  "manish",
];
let result = str1.every((el) => str2.includes(el));
console.log(result);

//first out last in out put = [ 2, 3, 4, 5, 1 ]
let arq = [1, 2, 3, 4, 5];
arq.push(arq.shift())
console.log(arq)

//first in last out with one line code output = [ 5, 1, 2, 3, 4 ]
let arrt = [1, 2, 3, 4, 5];
arrt.unshift(arrt.pop());
console.log(arrt);

//first in last out based on n
let arra = [1, 2, 3, 4, 5];
n = 3;

function add(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
console.log(add(arra, n));

//add
const k = [1, 4, 7, 8, 10];
let ad = 0;
function addition(ar) {
  ad = ad + ar.pop();
  if (ar.length) {
    addition(ar);
  }
}
addition(k);
console.log(ad);

//remove near by duplicate output =[2,1,1,6,7]
let r = [2, 3, 3, 1, 5, 5, 1, 6, 7];
for (let i = 0; i <= r.length - 1; i++) {
  if (r[i] == r[i + 1]) {
    r.splice(i, 2);
    i = i - 1;
    // to get output as [ 2, 3, 1, 5,1, 6, 7]:  r.splice(i, 1);
    //i = i -2;
  }
}
console.log(r);

//print the student name with total marks and avg
let students = [
  {
    firstName: "sanvi",
    marks: 60,
  },
  {
    firstName: "Sanvith",
    marks: 80,
  },
  {
    firstName: "sanvi",
    marks: 75,
  },
];

function calAvg(firstName, ar) {
  let length = 0;
  let result = ar
    .filter((el) => {
      return el.firstName == firstName;
    })
    .reduce((ac, cu, i, a) => {
      //reduce accepts array as well in 4th argument
      length = a.length;
      return ac + cu.marks;
    }, 0);
  return `${firstName} ${result} ${result / length}`;
}
console.log(calAvg("sanvi", students));

//for in and for of
let ra = [1, 4, true, "ashwini"];
for (let key in ra) {
  console.log(key);
}
for (let val of ra) {
  console.log(val);
}
