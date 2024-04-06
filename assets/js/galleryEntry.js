/* GALLERY ENTRY DATA CLASS */
/* -------------------- */
const galleryItemPrefix = "Gallery Item: ";
// Centralises all relevant data pertaining to a Gallery Entry
class GalleryEntry {
  constructor(index, imgPath, altText, imgElement, thumbImg, titleText) {
    this.index = index; // Position within gallery
    this.imgPath = imgPath; // IMG URL
    this.altText = altText; // Alt text for the IMG
    this.thumbImg = thumbImg; // IMG URL for thumbnail (smaller size, compressed format)
    this.imgElement = imgElement; // IMG Element related to this entry
    this.titleText = titleText; // Title text for the IMG

    // Apply data to member thumbnail
    this.imgElement.src = thumbImg;
    this.imgElement.alt = `${galleryItemPrefix}${altText}`;
    this.imgElement.title = titleText;

    // Hook in member element to allow for updating main IMG based on this selection
    this.imgElement.addEventListener("click", () => {
      updateMainImgFromSelection(this);
    });
  }
}
