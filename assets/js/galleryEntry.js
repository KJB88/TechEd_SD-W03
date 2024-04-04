class GalleryEntry {
  constructor(name, searchTerm, imageURL, imageWidth, imageHeight) {
    this.name = name;
    this.searchTerm = searchTerm === "" ? this.name : searchTerm;
    this.imageURL = imageURL;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;

    getImageFromRemote(this);
  }
}
