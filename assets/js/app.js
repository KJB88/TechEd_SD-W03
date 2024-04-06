/* CORE GALLERY FUNCTIONALITY */
/* -------------------- */
/* #region VARS. */

//TODO: Accessibility (colourblindness, screen reading/ARIA/, physical impairment keyboard events)
// TODO: Center scroll bar to selected image

const localImgs = [
  {
    path: "./assets/img/arthas1.jpg",
    thumb: "./assets/img/thumbnails/arthas1_thumb.webp",
    alt: "Sleepy tuxedo cat",
  },
  {
    path: "./assets/img/arthas2.jpg",
    thumb: "./assets/img/thumbnails/arthas2_thumb.webp",
    alt: "Curious tuxedo cat",
  },
  {
    path: "./assets/img/loki1.jpg",
    thumb: "./assets/img/thumbnails/loki1_thumb.webp",
    alt: "Grumpy void cat",
  },
  {
    path: "./assets/img/loki2.jpg",
    thumb: "./assets/img/thumbnails/loki2_thumb.webp",
    alt: "Void cat loaf",
  },
  {
    path: "./assets/img/luna1.jpg",
    thumb: "./assets/img/thumbnails/luna1_thumb.webp",
    alt: "Comfortable tortoiseshell cat",
  },
  {
    path: "./assets/img/luna2.jpg",
    thumb: "./assets/img/thumbnails/luna2_thumb.webp",
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
      new GalleryEntry(
        i,
        localImgs[i].path,
        localImgs[i].alt,
        galleryImgs[i],
        localImgs[i].thumb
      )
    );
  }

  updateMainImg(
    galleryLib[galleryIndex].imgPath,
    galleryLib[galleryIndex].altText
  );

  clearFormInput();
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

function updateMainImgFromSelection(entry) {
  updateMainImg(entry.imgPath, entry.altText);
  galleryIndex = entry.index;
}

function updateMainImg(imgPath, altText) {
  mainImgElement.src = imgPath;
  mainImgElement.alt = altText;
  mainImgElement.title = altText;
}
/* #endregion GALLERY STATE */
/* -------------------- */
/* #region GALLERY NAV */

function nextImg() {
  galleryIndex++;

  if (galleryIndex >= galleryLib.length) galleryIndex = 0;

  updateMainImgFromSelection(galleryLib[galleryIndex]);
}

function prevImg() {
  galleryIndex--;

  if (galleryIndex < 0) galleryIndex = galleryLib.length - 1;

  updateMainImgFromSelection(galleryLib[galleryIndex]);
}

function toggleCollapse() {
  if (!isCollapsed) {
    galleryParent.classList.add("hide");
    collapseBtn.innerText = "v";
    collapseBtn.ariaLabel = "Open the image selection";
    isCollapsed = true;
    return;
  }

  galleryParent.classList.remove("hide");
  collapseBtn.innerText = "^";
  collapseBtn.ariaLabel = "Collapse the image selection";
  isCollapsed = false;
}
/* #endregion GALLERY NAV */
/* -------------------- */
