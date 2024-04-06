class GalleryEntry {
  constructor(index, imgPath, altText, imgElement, thumbImg) {
    this.index = index;
    this.imgPath = imgPath;
    this.altText = altText;
    this.thumbImg = thumbImg;
    this.imgElement = imgElement;

    this.imgElement.src = thumbImg;
    this.imgElement.alt = altText;
    this.imgElement.title = altText;
    this.imgElement.addEventListener("click", () => {
      updateMainImgFromSelection(this);
    });
  }
}
