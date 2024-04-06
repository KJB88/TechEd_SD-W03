<div align="center">
  <h1>:mortar_board: Tech Educators' SWD Bootcamp :mortar_board:<br/>:mortar_board: Week 03 Assessment :mortar_board:</h1>
  <p>
    <a href="http://www.LinkedIn.com/in/kevin-barr1988">LinkedIn</a> |
    <a href="http://kjb88.github.io">Website</a> |
    <a href="mailto:kevinbarr.business@gmail.com">Email</a> |
    <a href="https://github.com/KJB88">Github</a>
  </p>
<p>
  Repository for coursework for TechEd Software Development Bootcamp - Week 03
</p>
</div>
<section>
<h2>Project Outline</h2>
<p>Build an accessible image gallery with keyboard navigation and voice announcements.</p>
  <p><b>All requirements and stretch goals are being worked on.</b></p>
</section>
<section>
<h2>User Stories</h2>
  As a user...
<ul>
<li>I want to browse a set of thumbnail images that load quickly.</li>
  <li>I want to select a thumbnail and display a larger version of the image, with a description.</li>
  <li>I expect accessible considerations like alternative text for images, and the ability to click next and previous buttons using the keyboard.</li>
</ul>
</section>
<section>
<h2>Requirements</h2>
<ul>
<li>One page, with a set of thumbnail images, and a larger image.</li>
  <li>Styled appropriately with CSS, and make use of media queries (mobile responsive).</li>
  <li>Use client-side JS to display the larger image when a thumbnail is selected.</li>
  <li>Use client-side JS to navigate between images using the keyboard (tab, enter).</li>
</ul>
</section>
<section>
<h2>Stretch Goals</h2>
<ul>
<li><b>Keyboard Input</b>: Handle user interaction with keyboard only (as if they have no mouse). You can use tab and enter/space like for all websites. Possible use of also arrow keys.</li>
  <li><b>Voiceover Systems</b>: Use the OS's voiceover tools or a Screen Reader to have the computer announce the alt text of the selected image.</li>
  <li><b>Unsplash API</b>: Populate the images with calls to Unsplash.</li>
</ul>
</section>
<section>
<h2>Implementation (of Requirements)</h2>
  <h3>Not-Splash: The Totally Original Gallery!</h3>
  <p>The webpage has an attractive and logical layout. It is styled in a pleasing way using CSS. Several elements are designed to be naturally responsive independent of media queries. However, some elements (header elements, main image gallery) are forced to be responsive via media queries dependent on screen height and width. All images have alternate text, different titles and applicable elements have ARIA labelling. The nav links will swap from individual anchors to a dropdown when the screen width becomes too small.</p>
    <h3>I see Cat, I click Cat</h3>
  <p>The gallery selection will populate the main IMG on a click of an individual piece of internal content. Click my cats to your hearts content! Just mind the murder mittens.</p>
      <h3>The Tabulator and Carriage Return</h3>
  <p>TODO</p>
</section>
<section>
  <h2>Implementation (of Stretch Goals)</h2>
  <h3>Pro Gamer Move</h3>
  <p>TODO</p>
    <h3>Beep Boop: Reading the Screen</h3>
    <p>TODO</p>
      <h3>418: I'm a Teapot</h3>
      <p>Fetcher.js sends requests to the Unsplash API (and also their public API) to request random IMGs and also IMGs based on a search term. This .js falls back to using their public API to retrieve just IMGs (no alt data) if it cannot receive a succesful status code from the Unsplash developer API.</p>
</section>
<section>
  <h2>Honorary Mentions</h2>
  <h3>TODO</h3>
  TODO
</section>
