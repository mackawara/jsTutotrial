window.addEventListener("DOMContentLoaded", () => {
  console.log("doc loaded");

  const name = "Juanita,Courage,lisbon"; // use varianble as a bucket t store data that we may want to use later
  let surname; // varible declaration using let keyword
  surname = "nyoni"; // variable assignment ( assigning ) this is the same as let surname="nyoni"

  const list = ["Juanita", "Courage", "lisbon", 4, name];
  const age = 22; // integer which is a numer
  const favouriteColor = "grey"; // string shown inverted commas

  let list2 = [];
  //console.log(list);
  //console.log(name);

  const kar = {
    name: `Audi`,
    make: "Q8",
    type: "SUV",
    maxSpeed: 180,
  }; /*  an object contain key value pairs separated by a colon. key is on the left and the value on the right of the colon */

  console.log(kar.name); // accessing the object values using the dot operator
  const carlist = [kar];
  const red = "red";
  //console.log(name);
  const nameSection = document.getElementById("nameSection");
  const carSection = document.querySelector("#car");

  carSection.innerText = `Name of car: ${kar.name}`; // accessing a variable in string concatenation ${variablenName} inside back ticks
  /* carSection.innerText = "name of car " + car.name; */
  nameSection.innerText = name;
  nameSection.style.color = red;
  nameSection.style.backgroundColor = "blue";
  nameSection.style.display = "flex ";

  const result = document.querySelector("#result");
  const result2 = document.querySelector("#result2");

  function consolefunction() {
    // function declaration using function keyword
    console.log("function has been called"); // function perfoms whatever ode will be in the curly braces
  }

  consolefunction(); // invoking or calling a function which means we telling it to excute the code

  function addition(number1, number2) {
    // number1 and number 2 are parameters/arguments basically they are temporary variables that wll only get their values when the function is invoked , called
    return number1 + number2;
  }
  addition(2, 3); // this is the same const number1=2 const number2=3
  result2.innerText = `the result of addition is ${addition(10, 10)}`;
  result.innerText = addition(2, 2); // output in broswers is 22 because JS cant perform arithmetic operations on strings
});
