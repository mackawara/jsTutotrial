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
    name: "Audi",
    make: "Q8",
    type: "SUV",
    isPassengercar: true //boolean value
  }; /*  an object contain key value pairs separated by a colon. key is on the left and the value on the right of the colon */

  console.log(car.name); // accessing the object values using the dot operator
  const carlist = [car];
  const red = "red";
  //console.log(name);
  const nameSection = document.querySelector("#nameSection");

  nameSection.innerText = car.availableColors
  nameSection.style.color = red;
  nameSection.style.backgroundColor = "blue";
  nameSection.style.display = "flex ";

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

});
