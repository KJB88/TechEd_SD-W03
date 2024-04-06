/* SEARCH QUERY FORM */
/* -------------------- */
/* #region VARS. */

const form = document.querySelector("form"); // The form element
const formInput = document.getElementById("search-input-field"); // The form's input field
const randomBtn = document.getElementById("random-btn"); // The random query button
const searchBtn = document.getElementById("search-btn"); // The query (specified by input field) button
const responseText = document.getElementById("response-text"); // Response text to display status code

/* #endregion VARS. */
/* -------------------- */
/* #region INIT. */

/* onClick to prevent default behaviour of form */
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

/* onClick generate a randomised adjective and noun, pass to fetcher */
randomBtn.addEventListener("click", () => {
  getNewRandomImg(`${generateAdjectiveNoun()}`);
});

/* onClick generate a randomised adjective and template it to the input form value, pass to fetcher */
searchBtn.addEventListener("click", () => {
  getNewSearchImg(`${getRandomAdjective()} ${formInput.value}`);
});

/* #endregion INIT. */
/* -------------------- */
/* #region FORM HANDLING */

/* Clear the input fields */
function clearFormInput() {
  formInput.value = "";
}

/* #endregion FORM HANDLING */
/* -------------------- */
