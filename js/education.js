const down = document.querySelector(".select_input_vl");
const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");
const start_date_input = document.querySelector(".start_date_input");
const anywhere = document.querySelector("body");

option.forEach((oneOption) => {
  oneOption.addEventListener("click", choose);
  function choose() {
    start_date_input.textContent = oneOption.textContent;
    start_date_input.textContent;
    options.classList.add("none");
  }
});

down.addEventListener("click", select);

function select() {
  if (options.classList[1] == "none") {
    options.classList.remove("none");
  } else {
    options.classList.add("none");
  }
}