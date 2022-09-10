//turning a variable from a number type into a string type:

let variable = 6;
variable = variable + ""; //turn the 6 into a "6"
variable += 6;
console.log("variable is now:", variable);
//66

// copying an object into another object fully (incluing sub-objects)

let object1 = {
  name: "Assaf",
  lname: "Fogelman",
  address: {
    street: "Izdarechet",
    number: "1",
    settlement: "Yagur",
  },
};

let object2;

object2 = JSON.parse(JSON.stringify(object1)); //copying an object
console.log("the object that was copied is:", object2);
/*
 the object that was copied is: 
Object { name: "Assaf", lname: "Fogelman", address: {…} }
*/

//using an event listener with an argument:

let buttonElement = document.querySelector("#buttonId");
const functionThatNeedsAnArgument = (argument) => {
  /* a function that logs the argument entered to it*/
  console.log("type of argument:", typeof argument);
  if (typeof argument === "object") {
    console.log(
      "the function was executed with the click but without an argument. so the argument is the event object.",
      argument
    );
    return;
  }
  console.log("the argument that we gave the function is:", argument);
};

window.addEventListener("load", () => {
  /* this is a definition of a function, not its calling to execution */
  buttonElement.addEventListener(
    "click",
    functionThatNeedsAnArgument(
      "Function executed when loading the event listener"
    )
  );
  buttonElement.addEventListener(
    "click",
    (() => {
      functionThatNeedsAnArgument(
        "The Function is still executed when loading the event listener with an anonymous function"
      );
    })()
  );
  buttonElement.addEventListener("click", functionThatNeedsAnArgument);
  buttonElement.addEventListener("click", () => {
    functionThatNeedsAnArgument(
      "This is how this works perfectly. BTW, because the anonymous function is being defined here, we can add 'e' (event object) an an argument"
    );
  });
});

let someVariable = "";
if (someVariable) {
  console.log("an empty string is not falsy");
} else {
  console.log("an empty string is falsy");
}

let dateNow = new Date();
let dateApi = new Date("2022-08-27T14:00");

console.log("dateApi", dateApi);

let cityToSearch = "Paris";

let examplecityArray = [
  {
    cityName: "Bagdad",
    planet: "Earth",
  },
  {
    cityName: "India",
    planet: "Earth",
  },
  {
    cityName: "Paris",
    planet: "Earth",
  },
  {
    cityName: "Jerusalem",
    planet: "Earth",
  },
];

let filteredCityArray = examplecityArray.filter((city) => {
  return city.cityName.includes(cityToSearch);
});

console.log("filteredCityArray:", filteredCityArray);
