const navElement =  document.getElementsByTagName("nav")[0]


// Add nav controls for mobile
if (document.documentElement.clientWidth < 600) {
  const openCloseButton = document.createElement("div");
  openCloseButton.style.height = '20px'
  openCloseButton.style.width = '20px'
  openCloseButton.style.position = 'fixed'
  openCloseButton.style.top = '15px'
  openCloseButton.style.right = '15px'
  openCloseButton.style.cursor = 'pointer'
  openCloseButton.style.right = '15px'
  openCloseButton.style.zIndex = '2001'
  openCloseButton.style.backgroundImage = 'url(\'../assets/images/open-icon.png\')'
  openCloseButton.style.backgroundSize = 'cover'
  
  openCloseButton.addEventListener('click', () => {
    if (navElement.classList.contains('nav-visible')) {
      navElement.classList.remove('nav-visible')
      document.body.style.overflowY = 'hidden'
      openCloseButton.style.backgroundImage = 'url(\'../assets/images/open-icon.png\')'
    } else {
      navElement.classList.add('nav-visible')
      document.body.style.overflowY = 'auto'
      openCloseButton.style.backgroundImage = 'url(\'../assets/images/close-icon.png\')'
    }
  })

  document.body.appendChild(openCloseButton);
}

const activateButton = () => {
  const button = document.getElementById('book-button')

  button.classList.remove('disabled')
}

// Natalia part start

// Modal logic
// Get the modal
const modal = document.getElementById("booking-modal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

if (modal && span) {
  

// When the user clicks on the button, open the modal
function openModal() {
    modal.style.display = "flex";
    document.body.style.overflowY = 'hidden';
}

// When the user clicks on <span> (x), close the modal

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflowY = 'scroll';
};

span.onclick = closeModal
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal()
  }
}
}

// Natalia part end

// Domi part start

const firstStage = document.getElementsByClassName('first-stage')[0]
const secondStage = document.getElementsByClassName('second-stage')[0]
if (document.getElementById('submit-book')) {
  
document.getElementById('submit-book').addEventListener('click', () => {
  firstStage.style.display = 'none'
  secondStage.style.display = 'flex'
})

document.getElementById('great-button').addEventListener('click', () => {
  modal.style.display = "none";
  document.body.style.overflowY = 'scroll';

  // Display first stage again in case of second opening
  firstStage.style.display = 'flex'
  secondStage.style.display = 'none'
})

}

// Domi part end


// Start of Maddies part

const videoElement = document.getElementById('hello-video')
if (videoElement) {

  document.addEventListener('scroll', function (event) {
    var scrolled = document.scrollingElement.scrollTop + (190 * 2); // We add the height of the nav bar
    var position = videoElement.offsetTop;
    
    // TODO see when to stop video
    if(scrolled > position && scrolled < position + videoElement.offsetHeight && videoElement.currentTime === 0){
      // check if video is playing
      console.log('play')
      // Ready state bigger than two means that the video has enough data to play
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
      if (!(videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended && videoElement.readyState > 2)) {
        videoElement.play()
      } 
    } else if (scrolled < position || scrolled > position + videoElement.offsetHeight) {
      console.log('pauase')
      videoElement.pause()
    }
  });
}


// End of Maddies part