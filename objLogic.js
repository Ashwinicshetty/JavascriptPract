//remove the 'firstName' key from obj
const boj = {
  firstName: "ashwini",
  lastName: "shetty",
  info: {
    firstName: "abhijith",
    lastName: "shetty",
    details: {
      firstName: "sanvi",
    },
  },
};

function removeKey(obj, keysToRemove) {
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] == "object") {
      acc[key] = removeKey(obj[key], keysToRemove);
    } else if (key != keysToRemove) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
console.log(removeKey(boj, "firstName"));
