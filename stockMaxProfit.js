const arr = [45, 24, 35, 31, 40, 38, 11, 60];
let buy = arr[0];
let maxProfit = 0;

for (let i = 1; i < arr.length; i++) {
  let profit = arr[i] - buy;
  if (profit > maxProfit) {
    maxProfit = profit;
  } else if (profit < maxProfit) {
    buy = arr[i];
  }
}
console.log(maxProfit);

//fun constructor
function Person() {
  (this.name = "John"), (this.age = 23);
}

// create an object
const person = new Person();
console.log(person);
