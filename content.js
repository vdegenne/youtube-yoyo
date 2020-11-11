let y = 0;
let element;

// prepare the icon
const button = document.createElement('button');
button.title = 'back to comment';
button.setAttribute('aria-label','back to comment');
button.classList.add('ytp-subtitles-button','ytp-button');
button.innerHTML = '<svg version="1.1" viewBox="0 0 36 36" width="100%" height="100%"><path d="M 27.99 10 c 0 -1.1 -0.89 -2 -1.99 -2 H 10 c -1.1 0 -2 0.9 -2 2 v 12 c 0 1.1 0.9 2 2 2 h 14 l 4 4 l -0.01 -18 z M 24 20 H 12 v -2 h 12 v 2 z m 0 -3 H 12 V 15 h 12 v 2 z m 0 -3 H 12 V 12 h 12 v 2 z" fill="#fff" /></svg>';
const controls = document.querySelector('.ytp-right-controls');
controls.insertBefore(button,controls.firstElementChild);

button.addEventListener('click',function (event) {
  if (element) {
    window.scrollTo(0,y - 120);
  }
});

document.addEventListener('click',function (event) {
  if (event.target.classList.contains('yt-simple-endpoint')) {
    // reset previous element style
    if (element) {
      element.style.backgroundColor = 'initial';
      element.style.fontWeight = 'initial';
    }
    element = event.target;
    y = event.pageY;
    element.style.backgroundColor = '#ffeb3b';
    element.style.fontWeight = 'bold';
  }
});