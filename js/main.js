(() =>{
  console.log('video stuff loaded');
  //variables come first
  let sigils = document.querySelectorAll('.sigilContainer'),
      lightbox = document.querySelector('.lightbox'),
      closeLightBoxButton = lightbox.querySelector('.close-lightbox');

//Functions in the middle
function showHouseVideo() {
  //debugger;
  lightbox.classList.add('show-lightbox');
  //make it play -->take autoplay off in index.html
}

function closeLightbox() {
  //debugger;
  lightbox.classList.remove('show-lightbox');
  //next stop video and rewind to 0

}

//Event Handling at the bottom
sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightbox);

})();

//So, add event listener first, then set up the function for each term.
