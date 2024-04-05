class GalleryEntry {
  constructor(index, imageURL, thumbnail, altText) {
    this.index = index;
    this.imageURL = imageURL;
    this.altText = altText;
    this.thumbnail = thumbnail;

    this.thumbnail.src = imageURL;
    this.thumbnail.addEventListener("click", () => {
      updateMainImgFromSelection(this.index, this.imageURL);
      this.thumbnail.alt = altText;
    });
  }
}
