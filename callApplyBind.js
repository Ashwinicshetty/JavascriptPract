let person = {
  firstName: "Ashwini",
  lastName: "Shetty",
  details(city, language) {
    console.log(
      `${this.firstName}  ${this.lastName} is from ${city} and speaks ${language}`
    );
  },
};
person.details("kundapura", "Kannada");
let person1 = {
  firstName: "nithin",
  lastName: "shetty",
};

//call
person.details.call(person1, "Udupi", "Tulu");
//or
const reuse = person.details;
reuse.call(person1, "Udupi", "Tulu");

//apply
reuse.apply(person1, ["Kerala", "Malyalam"]);

//bind
const sample = reuse.bind(person1, "Kerala", "Malyalam");
//bind and keep a copy of the method later invoked whenever required
sample();

//or
const sample2 = reuse.bind(person);
sample2("Tamilnadu", "Tamil");
