const counter = document.querySelector("#counter");
const button = document.querySelector(".reset button");
let number = 0;

function updateCount() {
  counter.innerText = number;
  if (number % 100 !== 0 || number === 0) {
    counter.style.setProperty("--gradient-width", (number % 100) + "%");
  } else {
    counter.style.setProperty("--gradient-width", "100%");
  }
}

function increment() {
  number++;
  updateCount();
}

counter.addEventListener("click", increment);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    increment();
  }
});

button.addEventListener("click", function () {
  number = 0;
  updateCount();
});
