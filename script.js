window.addEventListener("DOMContentLoaded", () => {
  console.log("doc loaded");

  const name = "Juanita,Courage,lisbon";
  const list = ["Juanita", "Courage", "lisbon", 4,name];
  console.log(list);
  console.log(name);

  const car = {
    name: "Audi",
    make: "Q8",
    type: "SUV",
    maxSpeed: 180,
  };

   const red = "red";
  console.log(name);
  const nameSection = document.getElementById("nameSection");

  nameSection.innerText = name;
  nameSection.style.color = red;
  nameSection.style.backgroundColor = "blue";
  nameSection.style.display = "flex ";
});
