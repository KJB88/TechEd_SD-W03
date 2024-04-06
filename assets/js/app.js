/* CORE GALLERY FUNCTIONALITY */
/* -------------------- */
/* #region VARS. */

//TODO: Accessibility (colourblindness, screen reading/ARIA/, physical impairment keyboard events)
// TODO: Center scroll bar to selected image

const localImgs = [
  {
    path: "./assets/img/arthas1.jpg",
    alt: "Sleepy tuxedo cat",
  },
  {
    path: "./assets/img/arthas2.jpg",
    alt: "Curious tuxedo cat",
  },
  {
    path: "./assets/img/loki1.jpg",
    alt: "Grumpy void cat",
  },
  {
    path: "./assets/img/loki2.jpg",
    alt: "Void cat loaf",
  },
  {
    path: "./assets/img/luna1.jpg",
    alt: "Comfortable tortoiseshell cat",
  },
  {
    path: "./assets/img/luna2.jpg",
    alt: "Curious tortoiseshell cat",
  },
];

const galleryLib = []; // Gallery Entry collection
const galleryLength = 6; // Initial amount of entries displayed in selection

const mainImgElement = document.getElementById("main-img"); // Main IMG element
const galleryOuter = document.getElementById("gallery-outer");

// Select all IMG tags within gallery-container
const galleryParent = document.getElementById("gallery-container");
const galleryImgs = galleryParent.querySelectorAll("img");

// Fallback IMG if unable to load any other IMGs from API
const fallbackImg = "";

let galleryIndex = 0; // Current IMG being displayed
let isCollapsed = false; // Is the gallery currently collapsed?

const nextBtn = document.getElementById("next-btn"); // Cycle forward in gallery button
const prevBtn = document.getElementById("prev-btn"); // Cycle backwards in gallery button
const collapseBtn = document.getElementById("collapse-btn"); // Collapse gallery button
const navDropdown = document.getElementById("nav-dropdown"); // Navigation Dropdown
const navOptions = navDropdown.options; // Options within dropdown

// Assign listeners to each option
for (let i = 0; i < navOptions.length; i++) {
  navOptions[i].addEventListener("click", () => {
    window.open(navOptions[i].value);
  });
}

/* #endregion VARS. */
/* -------------------- */
/* #region INIT. */

nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);
collapseBtn.addEventListener("click", toggleCollapse);

galleryIndex = Math.floor(Math.random() * galleryLength); // Randomise starting main Img

initializeGallery(); // Initialize and configure the gallery

function initializeGallery() {
  for (let i = 0; i < galleryLength; i++) {
    galleryLib.push(
      new GalleryEntry(i, localImgs[i].path, localImgs[i].alt, galleryImgs[i])
    );
  }

  mainImgElement.src = galleryLib[galleryIndex].imgPath;
  mainImgElement.alt = galleryLib[galleryIndex].altText;
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

function updateMainImgFromSelection(imgIndex, imgPath, altText) {
  updateMainImg(imgPath, altText);
  galleryIndex = imgIndex;
}

function updateMainImg(imgPath, altText) {
  mainImgElement.src = imgPath;
  mainImgElement.alt = altText;
}
/* #endregion GALLERY STATE */
/* -------------------- */
/* #region GALLERY NAV */

function nextImg() {
  galleryIndex++;

  if (galleryIndex >= galleryLib.length) galleryIndex = 0;

  updateMainImgFromSelection(galleryIndex, galleryLib[galleryIndex].imgPath);
}

function prevImg() {
  galleryIndex--;

  if (galleryIndex < 0) galleryIndex = galleryLib.length - 1;

  updateMainImgFromSelection(galleryIndex, galleryLib[galleryIndex].imgPath);
}

function toggleCollapse() {
  if (!isCollapsed) {
    galleryParent.classList.add("hide");
    collapseBtn.innerText = "v";
    isCollapsed = true;
    return;
  }

  galleryParent.classList.remove("hide");
  collapseBtn.innerText = "^";
  //
  isCollapsed = false;
}
/* #endregion GALLERY NAV */
/* -------------------- */
