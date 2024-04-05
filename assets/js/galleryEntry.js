class GalleryEntry {
  constructor(index, imageURL, thumbnail) {
    this.index = index;
    this.imageURL = imageURL;

    this.thumbnail = thumbnail;
    this.thumbnail.src = imageURL;
    this.thumbnail.addEventListener("click", () => {
      updateMainImg(this.index, this.imageURL);
    });
  }
}
