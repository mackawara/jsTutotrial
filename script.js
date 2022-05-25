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

  const car = {
    name: `Audi`,
    make: "Q8",
    type: "SUV",
    isPassengercar: true //boolean value
  }; /*  an object contain key value pairs separated by a colon. key is on the left and the value on the right of the colon */

  console.log(car.name); // accessing the object values using the dot operator
  const carlist = [car];
  const red = "red";
  //console.log(name);
<<<<<<< HEAD
  const nameSection = document.querySelector("#nameSection");

  nameSection.innerText = car.availableColors
=======
  const nameSection = document.getElementById("nameSection");
  const carSection = document.querySelector("#car");

  carSection.innerText = `Name of car: ${car.name}`; // accessing a variable in string concatenation ${variablenName} inside back ticks
  /* carSection.innerText = "name of car " + car.name; */
  nameSection.innerText = name;
>>>>>>> 2f569c531d396e442d443c769d931631c7e3a16e
  nameSection.style.color = red;
  nameSection.style.backgroundColor = "blue";
  nameSection.style.display = "flex ";

<<<<<<< HEAD
  console.log(car.name)
/* window.alert(car.name)//shows popup alert messages */



function multiplier(){
  
  const results=document.getElementById("results")
  const number1=document.getElementById("number1")
  const number2=document.getElementById("number2")
  const number3=document.getElementById("number3")
  const answer=parseInt(number1.value)*parseInt(number2.value)*parseInt(number3.value)
    
  results.innerText=answer

   /*  console.log(answer) */
}

const button =document.getElementById("button")
button.addEventListener("click",multiplier)

=======
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

  const showButton = document.querySelector(`#show`);

  function carInformation() {
    document.getElementById(
      "carDetails"
    ).innerText = `Car Name: ${car.name} \n Car make: ${car.make} \n  . Speed : ${car.maxSpeed}} 
    `;
  }
  showButton.addEventListener("mouseleave", carInformation); // event listener takes 2 arguments  1 the event 2 callback or function when event happens

  const button2 = document.getElementsByClassName("button2");
  console.log(button2);
  button2[0].addEventListener("click", () => {
    // arrow function or anpnymous function  syntax is  ()=>{ enter code here}
    const body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "red";
  });
  result2.innerText = `the result of addition is ${addition(10, 10)}`;
  result.innerText = addition(2, 2); // output in broswers is 22 because JS cant perform arithmetic operations on strings
>>>>>>> 2f569c531d396e442d443c769d931631c7e3a16e
});
