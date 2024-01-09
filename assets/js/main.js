// just some inherited eye-candy that can probably be done via newer css selectors directly
function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '45px';
  }
}

window.addEventListener("load", (ev) => {
  // carousel vertical scroll prevention based on Markus Oberlehner's snippet
  let els = document.querySelectorAll(".carousel__navigation, .carousel__prev, .carousel__next");
  for (let el of els) {
    el.addEventListener("click", (event) => {
      const $slide = document.querySelector(event.target.getAttribute('href'));
      if (!$slide) return;

      event.preventDefault();
      $slide.scrollIntoView({ block: "nearest" });
    });
  }

  // email subscription
  let form = document.getElementById("subs");
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let data = new FormData(form);
    fetch("https://ebm.si/civi-signup.php", { method: "post", body: data });
  });
});
