const form = document.querySelector("form");
const formInput = document.getElementById("search-input-field");
const randomBtn = document.getElementById("random-btn");
const searchBtn = document.getElementById("search-btn");
const responseText = document.getElementById("response-text");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
randomBtn.addEventListener("click", () => {
  getNewRandomImg(`${generateRandomSearchTerm()}`);
});
searchBtn.addEventListener("click", () => {
  getNewSearchImg(`${getRandomAdjective()} ${formInput.value}`);
});

function clearFormInput() {
  formInput.value = "";
}
