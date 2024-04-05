const form = document.querySelector("form");
const formInput = document.getElementById("search-input-field");
const randomBtn = document.getElementById("random-btn");
const searchBtn = document.getElementById("search-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
randomBtn.addEventListener("click", () => {
  updateMainImg(`${randomImgURL}${generateRandomSearchTerm()}`);
});
searchBtn.addEventListener("click", () => {
  updateMainImg(`${randomImgURL}${getRandomAdjective()} ${formInput.value}`);
  clearFormInput();
});

function clearFormInput() {
  formInput.value = "";
}
