/* FETCHER for UNSPLASH */
/* -------------------- */
/* #region VARS. */

const clientId = "&client_id=nU2I4QpLODwoZGEjXuzuWZzDPjYcazG16AewVXtqXmY"; // Client ID (yes, its supposed to be hidden)
const randomImgURL = "https://source.unsplash.com/random/?"; // Unsplash public API URL to receive random IMG
const randomImgURLAPI = "https://api.unsplash.com/photos/random?"; // Unsplash API URL to receive random IMG

const queryImgURLAPI =
  "https://api.unsplash.com/search/photos?page=1&per_page=1&query="; // Unsplash API URL to receive queried IMG

/* #endregion VARS. */
/* -------------------- */
/* #region DEVELOPER API FETCH */

/* Fetch new random IMG from developer API */
async function getNewRandomImg() {
  /* Contact API with GET photos/random. Additional random adjective is prepended to avoid returning the same random image from Unsplash */
  let resp = await fetch(
    `${randomImgURLAPI}${getRandomAdjective()}${clientId}`
  );
  responseText.textContent = `Response Status: ${resp.status}`; // Display status code

  // Check if request was successful
  if (!resp.ok) {
    getNewRandomImgNoApi(); // If not, pull a random IMG from the public API (does not incl. alt text)
    return;
  }

  let data = await resp.json(); // Parse data to get required info

  updateMainImg(data.urls.regular, data.alt_description); // Update site
}

/* Fetch new queried IMG from developer API */
async function getNewSearchImg(searchTerm) {
  /* Contact API with GET search/photos/?. Query is appended. */
  let resp = await fetch(`${queryImgURLAPI}${searchTerm}${clientId}`);
  responseText.textContent = `Response Status: ${resp.status}`; // Display status code

  // Check if request was successful
  if (!resp.ok) {
    getNewSearchImgNoApi(searchTerm); // If not, pull a queried IMG from the public API (does not incl. alt text)
    return;
  }

  let data = await resp.json(); // Parse data to get required info
  let img = data.results[0]; // Extract img info (we don't care about a lot of the data here)

  updateMainImg(img.urls.regular, img.alt_description); // Update site
}

/* #endregion DEVELOPER API FETCH */
/* -------------------- */
/* #region PUBLIC API FETCH */

/* Fetch new random IMG from public API */
function getNewRandomImgNoApi() {
  updateMainImg(`${randomImgURL}${generateAdjectiveNoun()}`, ""); // Update site (without alt text :( )
}
/* Fetch new queried IMG from public API */
function getNewSearchImgNoApi(searchTerm) {
  updateMainImg(
    `${randomImgURL}${generateAdjectiveNoun()} ${searchTerm}`, // Update site (without alt text :( )
    ""
  );
}
/* #endregion PUBLIC API FETCH */
/* -------------------- */
