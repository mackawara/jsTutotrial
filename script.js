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
    maxSpeed: 180,
  }; /*  an object contain key value pairs separated by a colon. key is on the left and the value on the right of the colon */

  console.log(car.name); // accessing the object values using the dot operator
  const carlist = [car];
  const red = "red";
  //console.log(name);
  const nameSection = document.getElementById("nameSection");
  const carSection = document.querySelector("#car");

  carSection.innerText = `Name of car: ${car.name}`; // accessing a variable in string concatenation ${variablenName}

  nameSection.innerText = name;
  nameSection.style.color = red;
  nameSection.style.backgroundColor = "blue";
  nameSection.style.display = "flex ";
});
