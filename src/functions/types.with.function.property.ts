
/// adding a function property to a type
enum ageUnit {
  years = "years",
  months = "months",
}

type PersonWithFunctionProperty = {
  name: string;
  age: number;
  ageUnit: ageUnit;
  country: string;
  greet: (greeting: string) => string;
};

let pwfp: PersonWithFunctionProperty = {
  name: "Scott",
  age: 30,
  ageUnit: ageUnit.years,
  country: "USA",
  greet: (greeting) => {
    return `${greeting} ${pwfp.name}`;
  },
};

function convertAgeToMonths(person: PersonWithFunctionProperty): PersonWithFunctionProperty {
  person.age = person.age * 12;
  person.ageUnit = ageUnit.months;
  return person;
}

console.log(convertAgeToMonths(pwfp));
console.log(pwfp.greet("Good Morning"));