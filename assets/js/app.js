/* CORE GALLERY FUNCTIONALITY */
/* -------------------- */
/* #region VARS. */
const randomImgURL = "https://source.unsplash.com/random/?"; // Unsplash API URL to receive random IMG

const galleryLib = []; // Gallery Entry collection
const galleryLength = 5; // Initial amount of entries displayed in selection

const mainImgElement = document.getElementById("main-img"); // Main IMG element

// Select all IMG tags within gallery-container
const galleryParent = document.getElementById("gallery-container");
const galleryImgs = galleryParent.querySelectorAll("img");

// Fallback IMG if unable to load any other IMGs from API
const fallbackImg = "";

let galleryIndex = 0; // Current IMG being displayed

/* #endregion VARS. */
/* -------------------- */
/* #region INIT. */

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", nextImg);
const prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", prevImg);

initializeGallery();
generateRandomSearchTerm();

function initializeGallery() {
  for (let i = 0; i < galleryLength; i++) {
    galleryLib.push(
      new GalleryEntry(
        i,
        `${randomImgURL}${generateRandomSearchTerm()}`,
        galleryImgs[i]
      )
    );
  }

  mainImgElement.src = galleryLib[galleryIndex].imageURL;
}

/* #endregion INIT. */
/* -------------------- */
/* #region GALLERY STATE */

function resetGallery() {
  galleryLib.length = 0;
  galleryIndex = 0;

  initializeGallery();
  clearFormInput();
}

function updateMainImgFromSelection(imgIndex, imageURL) {
  updateMainImg(imageURL);
  galleryIndex = imgIndex;

  updateGallerySelection(imgIndex);
}

function updateMainImg(imageURL) {
  mainImgElement.src = imageURL;
}
function updateGallerySelection(imgIndex) {
  galleryParent.firstChild = galleryImgs[imgIndex];
}
/* #endregion GALLERY STATE */
/* -------------------- */
/* #region GALLERY NAV */

function nextImg() {
  galleryIndex++;

  if (galleryIndex >= galleryLib.length) galleryIndex = 0;

  updateMainImgFromSelection(galleryIndex, galleryLib[galleryIndex].imageURL);
}

function prevImg() {
  galleryIndex--;

  if (galleryIndex < 0) galleryIndex = galleryLib.length - 1;

  updateMainImgFromSelection(galleryIndex, galleryLib[galleryIndex].imageURL);
}

/* #endregion GALLERY NAV */
/* -------------------- */
//TODO: Mobile responsivity
//TODO: Accessibility (colourblindness, screen reading/ARIA/, physical impairment keyboard events)
