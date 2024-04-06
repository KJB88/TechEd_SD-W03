const clientId = "&client_id=nU2I4QpLODwoZGEjXuzuWZzDPjYcazG16AewVXtqXmY";
const randomImgURL = "https://source.unsplash.com/random/?";
const randomImgURLAPI = "https://api.unsplash.com/photos/random?"; // Unsplash API URL to receive random IMG

const queryImgURLAPI =
  "https://api.unsplash.com/search/photos?page=1&per_page=1&query=";

async function getNewRandomImg() {
  let resp = await fetch(`${randomImgURLAPI}${clientId}`);
  responseText.textContent = `RESPONSE OK?: ${resp.ok}`;

  if (!resp.ok) {
    responseText.textContent += "Unable to retrieve alt data.";
    getNewRandomImgNoApi();
    return;
  }

  let data = await resp.json();

  updateMainImg(data.urls.regular, data.alt_description);
}

async function getNewSearchImg(searchTerm) {
  let resp = await fetch(`${queryImgURLAPI}${searchTerm}${clientId}`);
  responseText.textContent = `RESPONSE OK?: ${resp.ok}`;

  if (!resp.ok) {
    responseText.textContent += "Unable to retrieve alt data.";
    getNewSearchImgNoApi(searchTerm);
    return;
  }

  let data = await resp.json();
  let img = data.results[0];

  console.log(img);
  updateMainImg(img.urls.regular, img.alt_description);
}

function getNewRandomImgNoApi() {
  updateMainImg(`${randomImgURL}${generateRandomSearchTerm()}`, "");
}

function getNewSearchImgNoApi(searchTerm) {
  updateMainImg(
    `${randomImgURL}${generateRandomSearchTerm()} ${searchTerm}`,
    ""
  );
}
