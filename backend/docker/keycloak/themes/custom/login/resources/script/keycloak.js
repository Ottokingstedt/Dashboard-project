window.addEventListener("contextmenu", e=> e.preventDefault());

var loaderElement;

const preloader = document.createElement('html');
preloader.classList.add('preloader');
preloader.innerHTML = '<div class="load"></div>';

function loadContent(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loaderElement.style.opacity = opacity;
    window.setTimeout(function() {
      loadContent(opacity - 1);
    }, 1500);
  }
}

function displayContent() {
preloader.style.display = 'none';
  document.querySelector('body').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loaderElement = document.querySelector('body');

    if (loaderElement) {
      loaderElement.appendChild(preloader);
  
      loadContent(1);
    }
});