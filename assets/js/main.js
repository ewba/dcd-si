// just some inherited eye-candy that can probably be done via newer css selectors directly
function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '45px';
  }
}

// carousel vertical scroll prevention based on Markus Oberlehner's snippet (but doesn't work on ff due to missing scrollIntoViewIfNeeded)
window.addEventListener("load", (ev) => {
  let els = document.querySelectorAll(".carousel__navigation, .carousel__prev, .carousel__next");
  for (let el of els) {
    el.addEventListener("click", (event) => {
      const $slide = document.querySelector(event.target.getAttribute('href'));
      if (!$slide) return;

      if ($slide.scrollIntoViewIfNeeded) {
        event.preventDefault();
        $slide.scrollIntoViewIfNeeded();
      } else if ($slide.scrollIntoView) {
        event.preventDefault();
        $slide.scrollIntoView();
      }
    });
  }
});
