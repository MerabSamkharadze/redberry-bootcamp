const popup = document.querySelector(".popup");
const remove = document.getElementById("remove");

remove.addEventListener("click", removePopup);

function removePopup() {
  popup.setAttribute("class", "none");
}
