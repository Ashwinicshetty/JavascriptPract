//function curring
function calculateVolume(len, bredth, height) {
  return len * bredth * height;
}
console.log(calculateVolume(4, 5, 6));
//fun curring
function calvol(len) {
  return function (bredth) {
    return function (height) {
      return len * bredth * height;
    };
  };
}
console.log(calvol(4)(5)(6));

//fun rec
function sum(num) {
  return function add(num1) {
    if (num1) {
      num = num + num1;
      return add;
    }
    return num;
  };
}
console.log(sum(1)(2)(3)(4)());

//to find the type of value
console.log(Object.prototype.toString.call("hi"));

//print the element provided n times
//ex: print 7 5 times
function replicate(a, b) {
  let res = [];
  for (let i = 1; i <= a; i++) {
    res.push(b);
  }
  return res;
}
console.log(replicate(5, 7));

//sum of num from 1 to 10
let num = 0;
for (let i = 0; i <= 10; i++) {
  num = num + i;
}
console.log(num);

//
function counter() {
  let counter = 0;
  return (obj = {
    sum(val) {
      counter = counter + val;
    },
    getTotal() {
      return counter;
    },
  });
}
var c = counter();
c.sum(7);
c.sum(8);
console.log(c.getTotal());
c.sum(5);
console.log(c.getTotal());

//write a call back fun
function add(cb) {
  cb();
}
add(() => {
  console.log("I am a callback");
});
