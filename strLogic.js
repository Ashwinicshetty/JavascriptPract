var string = "Welcome to this Javascript Guide!";
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
//Output becomes Guide! Javascript this to Welcome
console.log(reverseBySeparator(string, " "));

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");
console.log(reverseEntireSentence);

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
console.log(reverseEachWord);

//convert str from lowercase to uppercase
let arr2 = ["nithin", 3, "abhi"];
let res1 = arr2.reduce((ac, cu) => {
  if (typeof cu === "string") {
    ac.push(cu.toUpperCase());
  }
  return ac;
}, []);
console.log(res1);

//convert str from lowercase to uppercase
let arr4 = ["nithin", "abhi"];
let uppercase = arr4.map((element) => element.toUpperCase());
console.log(uppercase);

let ress = ar.map((el) => (typeof el === "string" ? el.toUpperCase() : el));
console.log(ress);
//str from uppercase to lower case
let arr3 = ["NITHIN", 3, "ABHI", true, "ASHWINI"];
let res2 = arr3.reduce((ac, cu) => {
  if (typeof cu === "string") {
    ac.push(cu.toLowerCase());
  }
  return ac;
}, []);
console.log(res2);

//print character count
let str = "ashwiniwinia";
const red = [...str].reduce((ac, cu) => {
  ac[cu] = ac[cu] ? ac[cu] + 1 : 1;
  return ac;
}, {});

console.log(red);

//print vowels count
let samp = "The quick brown fox jumps over the lazy dog";
console.log(samp.match(/[aeiou]/gi).length);
