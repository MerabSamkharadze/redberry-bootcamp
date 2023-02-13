const userName = document.querySelector(".name");
const surName = document.querySelector(".surname");
const photo = document.getElementById("photo");

const green_icon = document.querySelectorAll(".green_icon");
const nm_input = document.querySelectorAll(".nm_input");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const picture = document.getElementById("myFile");

const inputsArray = [firstName, lastName];

inputsArray.forEach((input, i) => {
  input.addEventListener("keyup", (event) => {
    if (event.target.value.length >= 2 && /^[ა-ჰ]*$/.test(event.target.value)) {
      nm_input[i].classList.add("valid");
      green_icon[i].classList.remove("none");

      if (i === 0) {
        userName.innerText = event.target.value;
      } else if (i === 1) {
        surName.innerText = event.target.value;
      }
    } else {
      nm_input[i].classList.remove("valid");
      green_icon[i].classList.add("none");

      if (i === 0) {
        userName.innerText = event.target.value;
      } else if (i === 1) {
        surName.innerText = event.target.value;
      }
    }
  });
});

picture.onchange = (event) => {
  const imageUrl = URL.createObjectURL(event.target.files[0]);
  photo.classList.remove("photo");
  photo.src = imageUrl;
};
