const $slideItems = document.querySelectorAll('.body__div--element');
const $slideshow = document.querySelector('.body__div--conteneur');
const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

let slideWidth = $slideshow.offsetWidth;
let slideItemsWidth = slideWidth / $slideItems.length;
let maxTranslate = slideWidth - slideItemsWidth;

let decallage = 0;
$next.addEventListener('click', function() {
  slide(1);
});

$prev.addEventListener('click', function() {
  slide(-1);
});

function slide(nb) {
  decallage += slideItemsWidth * nb;
  if (decallage > maxTranslate) {
    decallage = maxTranslate;
  } else if (decallage < 0) {
    decallage = 0;
  }
  $slideshow.style.transform = 'translateX(-' + decallage + 'px)';
}
