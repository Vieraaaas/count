const counter = document.querySelector("#counter p");
const button = document.querySelector(".reset button");
let number = 0;

counter.addEventListener("click", function () {
  number++;
  counter.innerText = number;
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    number++;
    counter.innerText = number;
  }
});
