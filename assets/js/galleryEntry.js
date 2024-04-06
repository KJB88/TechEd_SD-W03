class GalleryEntry {
  constructor(index, imgPath, altText, thumbnail) {
    this.index = index;
    this.imgPath = imgPath;
    this.altText = altText;
    this.thumbnail = thumbnail;

    this.thumbnail.src = imgPath;
    this.thumbnail.alt = altText;
    this.thumbnail.addEventListener("click", () => {
      updateMainImgFromSelection(this.index, this.imgPath, this.altText);
    });
  }
}
