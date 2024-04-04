async function getImageFromRemote() {
  console.log(`Fetching!`);
  const response = await fetch("https://source.unsplash.com/random");
  console.log(`Response: ${response}`);

  imgElement.src = window.URL.createObjectURL(await response.blob());
}
