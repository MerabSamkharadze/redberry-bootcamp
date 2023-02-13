const down = document.querySelector(".select_input_vl");
const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");
const start_date_input = document.querySelector(".start_date_input");
const anywhere = document.querySelector("body");
const newSectionButton = document.querySelector(".new_section_btn");
const sectionsBody = document.querySelector(".section");

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

newSectionButton.addEventListener("click", () => {
  const lastSection = document.createElement("div");
  const positionValue = document.querySelector(".position_dm");
  const description = document.querySelector(".about_input_dm");
  const date = document.querySelector(".start_date_input_no_event");

  if (true) {
    lastSection.innerHTML = `<div class="bord_section">
  <div class="position">
  <label for="fname" class="name_font">სასწავლებელი</label>
  <div class='position_dm'>${positionValue.value}</div>
  <label for="fname" class="under_text_font"
    >მინიმუმ 2 სიმბოლო</label
  >
</div>

<div class="info_input_boxes">
  <div class="dates">
    <div class="date_input">
      <label for="fname" class="name_font">ხარისხი</label>
      <div >
        <img
          class="down_img"
          src="/images/down_vector.png"
          alt="click"
        />
        <div class="start_date_input_no_event">${start_date_input.textContent}</div>
      </div>
    </div>

    <div class="date_input">
      <label for="fname" class="name_font"
        >დამთავრების თარიღი</label
      >
      <div class='start_date_input_no_event'>${date.value}</div>
    </div>
  </div>
  <div class="input_about_me">
    <label for="fname" class="name_font">აღწერა</label>
    <div class='about_input_dm'>${description.value}</div>
  </div>
</div>
</div>`;

    description.value = "";
    positionValue.value = "";
    date.value = "";
    start_date_input.innerHTML = "აირჩიეთ ხარისხი";
    sectionsBody.prepend(lastSection);
  }
});
