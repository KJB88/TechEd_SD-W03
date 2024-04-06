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
      snapToElement(this.index, this.imgElement);
    });

    this.imgElement.addEventListener("focus", () => {
      snapToElement(this.index, this.imgElement);
    });

    this.imgElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        updateMainImgFromSelection(this);
      }
    });
  }
}

function snapToElement(index, thumbnail) {
  /* Stolen from Tim (who also shamelessly stole it) */

  // Get rects that define position and volume of elements on page
  const thumbRect = thumbnail.getBoundingClientRect();
  const containerRect = galleryOuter.getBoundingClientRect();

  // Calculate center of thumbnail by factoring in distance from edge and center of parent
  let scrollLeftPos;
  scrollLeftPos =
    thumbnail.offsetLeft + thumbRect.width / 2 - containerRect.width / 2;

  // Snap scroll to point
  galleryParent.scrollTo({
    left: scrollLeftPos,
    behavior: "smooth",
  });
}
