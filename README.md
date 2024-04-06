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
  <p><b>All requirements and stretch goals are complete. No specific difficulties.</b></p>
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
  <p>The webpage has an attractive and logical layout. It is styled in a pleasing way using CSS. Several elements are designed to be naturally responsive independent of media queries. However, some elements (header elements, main image gallery) are forced to be responsive via media queries dependent on screen height and width. All images have alternate text, different titles and applicable elements have ARIA labelling. Verified without issue by WAVE.</p>
    <h3>I see Cat, I click Cat</h3>
  <p>The gallery selection will populate the main IMG on a click of an individual piece of internal content. Click my cats to your hearts content! Just mind the murder mittens. The smaller gallery selection images are different files to the main image display. They are .webp but the main image is .jpg. Additionally, the gallery selection images are scaled down (separate files with smaller images).</p>
      <h3>The Tabulator and Carriage Return</h3>
  <p>Smash that TAB and ENTER button right in the face. You can use them to activate and navigate the website using focus.</p>
</section>
<section>
  <h2>Implementation (of Stretch Goals)</h2>
  <h3>Pro Gamer Move</h3>
  <p>I've destroyed my WASD keys over the years of gaming, so I've resorted to using the arrow keys to navigate websites. Check it out while you're trying the TAB and Enter support.</p>
    <h3>Beep Boop: Reading the Screen</h3>
    <p>You can listen to the sultry tones of Microsoft Sam as he reads out the documentary that are my ARIA-labels. Bonus points if you can make it sound like David Attenborough. Enjoy!</p>
      <h3>418: I'm a Teapot</h3>
      <p>Fetcher.js sends requests to the Unsplash API (and also their public API) to request random IMGs and also IMGs based on a search term. This .js falls back to using their public API to retrieve just IMGs (no alt data) if it cannot receive a succesful status code from the Unsplash developer API.</p>
</section>
<section>
  <h2>Honorary Mentions</h2>
  <h3>My Cats</h3>
  <p>Yes, the images are my cats. No, you can't have them.</p>
    <h3>For Your Viewing Pleasure</h3>
  <p>The gallery adjusts itself really well when the width gets too small. It also snaps to the focused image, which is really handy.</p>
      <h3>I'm the biggest adjective-noun you'll ever meet!</h3>
  <p>The wordlib has made a come back from the Week 02 assignment. I used it to append onto the random search terms to generate additional random images.</p>
  <h3>JavaScript Wizard</h3>
  <p>The GalleryEntry class not only centralises all the related data into one class (and its instances), but it also handles setting up its own listeners.</p>
  <h3>Bouncey Rainbow Text</h3>
  <p>Another returner from Week02. You're going to be seeing this one a lot. Get used to it!</p>
</section>
