const body = document.querySelector("body");
const colorBtn = document.querySelectorAll(".colorBtn");
const reset = document.querySelector("#reset");

colorSwitcher = (elem) => {
  body.id = elem.id;
  elem.innerHTML = `<span class="material-symbols-outlined">
    check_circle
    </span>`;
  colorBtn.forEach((elem1) => {
    if (elem1.id !== body.id) {
      elem1.innerHTML = ``;
    }
  });
};


reset.addEventListener("click", () => {
  body.id = "";

  colorBtn.forEach((elem1) => {
    elem1.innerHTML = ``;
  });
});
