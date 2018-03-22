(() => {
  consoe.log('video stuff loaded!')
//variables come first!
//grab the video
const vidPlayer = document.querySelector('video'),
      pauseButton = document.querySelectorAll('button')[0],
      playButton = document.querySelectorAll('button')[1],
      rewindButton = document.querySelectorAll('button')[2];

//functions go in the middle
function volOn() {
  vidPlayer.muted = false;
}

function volOff() {
  vidPlayer.muted = true;
}

function playVideo() {
  //make the video play!
  vidPlayer.play();
}

function pauseVideo() {
  //make the video play!
  vidPlayer.pause();
}

function rewindVideo() {
  //make the video play!
  vidPlayer.currentTime = 0;
  //vidPlayer.currentTime -= 5; <-- this will make it jump back 5 seconds in the timeline
}
// before the dot is thing youre working with.after the dot is what youre asking it to do
      vidPlayer.addEventListener('mouseover', volOn);
      vidPlayer.addEventListener('mouseout', volOff);
      playButton.addEventListener('click', playVideo);
      pauseButton.addEventListener('click', pauseVideo);
      rewindButton.addEventListener('click', rewindVideo);
})();
