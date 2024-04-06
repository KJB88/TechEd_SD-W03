/* GALLERY ENTRY DATA CLASS */
/* -------------------- */

// Centralises all relevant data pertaining to a Gallery Entry
class GalleryEntry {
  constructor(index, imgPath, altText, imgElement, thumbImg) {
    this.index = index;
    this.imgPath = imgPath;
    this.altText = altText;
    this.thumbImg = thumbImg;
    this.imgElement = imgElement;

    // Apply data to member thumbnail
    this.imgElement.src = thumbImg;
    this.imgElement.alt = altText;
    this.imgElement.title = altText;

    // Hook in member element to allow for updating main IMG based on this selection
    this.imgElement.addEventListener("click", () => {
      updateMainImgFromSelection(this);
    });
  }
}
