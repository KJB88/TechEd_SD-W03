const galleryLibrary = [];
const imgElement = document.querySelector("img");

const entry = new GalleryEntry("Test", "https://source.unsplash.com/random/");

imgElement.src = entry.imageURL;
