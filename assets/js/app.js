const galleryLibrary = [];
const imgElement = document.querySelector("img");

const entry = new GalleryEntry("Test", "https://source.unsplash.com/random/");
const fallbackImage = "";

const randomImgURL = "https://source.unsplash.com/random/";

initializeGallery();
function initializeGallery() {
  imgElement.src = randomImgURL;
}

//TODO: Mobile responsivity
//TODO: Accessibility (colourblindness, screen reading/ARIA/, physical impairment keyboard events)
//TODO: Carousel
//TODO: Form input and querying
