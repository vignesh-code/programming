// copying objects
const person = { name: "Vignesh" };
console.log("person: ", person);

const updated = Object.assign({}, person, { age: 29 });
console.log("updated persom object: ", updated);

// shallow copy
const person = {
  name: "Vignesh",
  address: { country: "India", city: "Vellore" },
};
console.log("person: ", person);

const shallowCopy = { ...person, name: "Sathiyamurthy" };
shallowCopy.address.city = "Chennai";
console.log("updated person (shallow copy) object: ", shallowCopy);

// deep copy
const person = {
  name: "Vignesh",
  address: { country: "India", city: "Vellore" },
};
console.log("person: ", person);

const deepCopy = {
  ...person,
  address: {
    ...person.address,
  },
  name: "Sathiyamurthy",
};

deepCopy.address.city = "Chennai";
console.log("updated person (deep copy) object: ", deepCopy);
