

//setTime out
function add(a) {
  setTimeout(() => {
    console.log(a);
  }, a * 1000);
}
for (var i = 1; i <= 5; i++) {
  add(i);
}
// if we use var in forloop it prints '6' 5 times
//to avoid this we use let or we can go for the above first method
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

//print the below mentioned array using set timeout
let arr = [2, 3, 4, 6, 1, 5];
function add(i, count) {
  setTimeout(() => {
    console.log(arr[i]);
  }, count * 1000);
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
  count = count + arr[i];
  add(i, count);
}

//write a function that should accept 2 numbers and callback function and that call back should return the result after 2 milliseconds 
function add(a,b,cb){
    setTimeout(()=>{
        cb(a, b)
    },2000)
}
add(7,8,(a, b)=>{
    console.log(a+b);
})

//setinterval
function myTimer() {
  console.log("hi");
}
const myInterval = setInterval(myTimer, 1000);

function myStopFunction() {
  clearInterval(myInterval);
}
myStopFunction();
